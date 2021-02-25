import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Geolocation from '@react-native-community/geolocation';

const GoogleMapsComponent = () => {

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 32, lng: -97 }}
        />
    )
}

export const WrappedGoogleMap = withScriptjs(withGoogleMap(GoogleMapsComponent))
