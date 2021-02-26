import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Geolocation from '@react-native-community/geolocation';

import { getSpots } from '../../store/spot'


const GoogleMapsComponent = () => {

    const allSpots = useSelector(state => state.all_spots)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 32, lng: -97 }}>
                {/* {allSpots && console.log("THIS SHOULD BE ALL SPOTS", allSpots)}
                {allSpots && allSpots.map((spot) => (
                    <Marker key={spot.id} position={{lat: 42.7978, lng: 83.7049}} />
                ))} */}
                <Marker key={1} position={{lat: 29, lng: 82}} />
            </GoogleMap>
    )
}

export const WrappedGoogleMap = withScriptjs(withGoogleMap(GoogleMapsComponent))
