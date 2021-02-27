import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button'
import { ArrowDownCircle } from 'react-bootstrap-icons'
import { useLocation } from 'react-router-dom';

import { googleApiKey } from '../../GoogleMapsComponent/apikey'
import SpotViewMini from '../../SpotComponent/SpotViewMini'
import { searchSpots } from '../../../store/spot';
import MySearchMap from './searchmap';
import './search-page.css';

const SearchPage = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { city, guest } = queryString.parse(search)

    const [selectedSpot, setSelectedSpot] = useState(0)
    const [selectedPark, setSelectedPark] = useState(null)

    const spots_state = useSelector(state => state.spots.searched_spots)

    useEffect(() => {
        console.log(selectedSpot)
    }, [selectedSpot])

    useEffect(() => {
        dispatch(searchSpots(guest, city))
    }, [dispatch])

    const handleSearch = (spots_state) => {
        let spot_obj = []
        for (let spot in spots_state) {
            spot_obj.push(spots_state[spot])
        }
        return spot_obj.map((spot, idx) => (
            <div className='searched'>
                <SpotViewMini spot={spot} />
                <Button onClick={() => setSelectedPark(spot)}>View map</Button>
            </div>
        ))
    }

    const grammar = (amount) => {
        if (amount == 1) return 'person'
        return 'people'
    }

    const downCirc = () => {
        return (<ArrowDownCircle />)
    }

    return (
        <div className='search-page-body'>
            <div className='search-header'>
                {<h1>Spots available to book in '{city}' for {guest} {grammar(guest)} </h1>}
            </div>
            <div className='search-controls-container'>
                <Button>Change city: '{city}' {downCirc()}</Button>
                <Button>Change guest count: {guest}  {downCirc()}</Button>
            </div>
            <hr style={{ width: '100%' }}></hr>
            <div className='results-map-container'>
                <div className='search-results-container'>
                    {handleSearch(spots_state)}
                </div>
                <div className='google-map'>
                    {spots_state && <MySearchMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleApiKey}`}
                        loadingElement={<div style={{ height: "400px" }} />}
                        containerElement={<div style={{ height: "800px" }} />}
                        mapElement={<div style={{ height: "750px" }} />}
                        position={{ lat: spots_state[selectedSpot].latitude, lng: spots_state[selectedSpot].longitude }}
                        allSpots={spots_state}
                        selectedPark={selectedPark}
                        setSelectedPark={setSelectedPark}
                    />}
                    {spots_state && console.log(spots_state)}
                </div>
            </div>

        </div>
    )
};

export default SearchPage