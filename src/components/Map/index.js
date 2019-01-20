import React, { Component, Fragment } from 'react';
import MapView, {Marker} from 'react-native-maps'
import Search from '../Search/index'
import Directions from '../Directions/index'
import {Platform, PixelRatio} from 'react-native'
import { View } from 'react-native';
import markerImage from '../../assets/AppIcon.png'


export default class Map extends Component {
    state = {
        region: null,
        destination: null
    }

    getPixelSize(pixels){
        return Platform.select({
            android: PixelRatio.getPixelSizeForLayoutSize(pixels),
            ios: pixels
        })
    }

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            //on success
            ({coords: {latitude,longitude}}) => {
                this.setState({region: {latitude,longitude, latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134}})
            },
            //not success
            () => {

            },
            {
                timeout:3000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }

    handleLocationSelected = (data, {geometry}) => {
        const {location: {lat: latitude, lng: longitude}} = geometry

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text
            }
        })
    }
    
    render (){
        const {region, destination} = this.state
        return(
            <View style={{flex: 1 }}>
                <MapView
                    style={{flex: 1}}
                    region={region}
                    showsUserLocation={true}
                    loadingEnabled
                    ref={c => this.mapView = c}
                >
                    {destination && (
                        <Fragment>
                            <Directions 
                                origin={region}
                                destination={destination}
                                onReady={result => {
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: this.getPixelSize(30),
                                            left: this.getPixelSize(30),
                                            top: this.getPixelSize(30),
                                            bottom: this.getPixelSize(30)
                                        }
                                    })
                                }}
                            />
                            <Marker coordinate={destination} image={markerImage} />
                        </Fragment>
                    )}
                </MapView>
                
                <Search onLocationSelected={this.handleLocationSelected}/>
            </View>
        )
    }
}
