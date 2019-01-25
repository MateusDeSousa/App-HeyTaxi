import React, { Component, Fragment } from 'react';
import MapView, {Marker} from 'react-native-maps'
import Search from '../Search/index'
import Directions from '../Directions/index'
import Details from '../Details/index'
import {Platform, PixelRatio, BackHandler} from 'react-native'
import { View } from 'react-native';
import markerImage from '../../assets/IconeChegada.png'
import {LocationBox, LocationText, LocationTimeBox, LocationTimeText, LocationTimeTextSmall, BackButton, BackButtonText, BackButtonContainer} from './styles'
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyDzqc1dyShJJRsnSTaYBTNtTd_gi2KrqG0')

export default class Map extends Component {
    state = {
        region: null,
        destination: null,
        duration: null,
        location: null
    }

    constructor(props){
        super(props)
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
            async ({coords: {latitude,longitude}}) => {
                const response = await Geocoder.from({latitude, longitude})
                const address = response.results[0].formatted_address
                const location = address.substring(0, address.indexOf('-'))

                this.setState({location, region: {latitude,longitude, latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134},})
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

    handleBack = () => {
        this.setState({destination: null})
    }
    
    render (){
        const {region, destination, duration, location} = this.state
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
                                    this.setState({duration: Math.floor(result.duration)})
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: this.getPixelSize(20),
                                            left: this.getPixelSize(20),
                                            top: this.getPixelSize(20),
                                            bottom: this.getPixelSize(290)
                                        }
                                    })
                                }}
                            />
                            <Marker coordinate={destination} image={markerImage} >
                                
                            </Marker>
                            <Marker coordinate={region} >
                                <LocationBox>
                                    <LocationTimeBox>
                                        <LocationTimeText>{duration}</LocationTimeText>
                                        <LocationTimeTextSmall> MIN</LocationTimeTextSmall>
                                    </LocationTimeBox>
                                    <LocationText>{location}</LocationText>
                                </LocationBox>
                            </Marker>
                        </Fragment>
                    )}
                </MapView>
                
                {destination ? (
                    <Fragment>
                        <BackButtonContainer>
                            <BackButton onPress={this.handleBack}>
                                <BackButtonText>
                                    Escolher outro destino
                                </BackButtonText>
                            </BackButton>
                        </BackButtonContainer>
                        <Details />
                    </Fragment>
                ) : (<Search onLocationSelected={this.handleLocationSelected}/>)}
            </View>
        )
    }
}
