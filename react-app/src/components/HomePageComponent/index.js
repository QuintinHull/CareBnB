import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Geolocation from '@react-native-community/geolocation';
import { getTopAvailableSpots } from "../../store/spot"
import SearchBar from '../SearchComponent/SearchBar'
import SpotViewLarge from '../SpotComponent/SpotViewLarge'

import './home-page.css'
import { WrappedGoogleMap } from "../GoogleMapsComponent/index";


const HomePageComponent = () => {
    const dispatch = useDispatch()

    const [location, setLocation] = useState({})

    const available_spots = useSelector(state => state.spots.available_spots)

    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            const initialPosition = JSON.stringify(position);
            console.log(initialPosition)
        }, error => alert(JSON.stringify(error)), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
    }, [])
    useEffect(() => console.log(JSON.stringify(location)), [location])

    useEffect(() => {
        dispatch(getTopAvailableSpots())
    }, [dispatch])

    return (
        <div className='home-body'>
            <div className='home-search'>

                <SearchBar />
            </div>
            <div className='welcome-search-container'>
                <img src='https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Fnxq8pmpbs8dwmpeg75kk15z4f1i215&option=N&idlisting=listingmedia&w=1600&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sir-pacific-production-4.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg' alt='' className='welcome-image'></img>
            </div>
            <div className='newest-spots-container'>
                {available_spots && available_spots.map((spot, idx) => <SpotViewLarge key={idx} spot={spot} />)}
            </div>
            {console.log(location)}
            <div className='mission-container'>
                <div className='mission-statement-container'>
                    <h4 id='mission-statement'>"We aim to ensure no human being has to go to sleep without shelter...."</h4>
                </div>
                <div className='amount-sheltered-container'>
                    <h4>There are currently 230 guests being served</h4>
                </div>
            </div>
            <div className='google-maps-container'>
                <WrappedGoogleMap
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDODBRJuvQ5Ef_a-iMreiwYWdjwy_e3ZW8'}
                    loadingElement={<div style={{ height: "400px" }} />}
                    containerElement={<div style={{ height: "800px" }} />}
                    mapElement={<div style={{ height: "800px" }} />}
                />
            </div>
        </div>
    )
}

export default HomePageComponent