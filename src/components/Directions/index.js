import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyDzqc1dyShJJRsnSTaYBTNtTd_gi2KrqG0';

const Directions = ({destination, origin, onReady}) => ( 
    <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}   
        strokeWidth={3}
        strokeColor="hotpink"
    />
)

export default Directions;
