import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button'
import { ArrowDownCircle } from 'react-bootstrap-icons'
import { useLocation } from 'react-router-dom';

import SpotViewMini from '../../SpotComponent/SpotViewMini'
import { searchSpots } from '../../../store/spot';

import './search-page.css';

const SearchPage = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { city, guest } = queryString.parse(search)

    const [updateCity, setUpdateCity] = useState(city)
    const [updateGuestCount, setUpdateGuestCount] = useState('Guests')

    const spots_state = useSelector(state => state.spots.searched_spots)


    useEffect(() => {
        dispatch(searchSpots(guest, city))
    }, [dispatch])

    const handleSearch = (spots_state) => {
        let spot_obj = []
        for (let spot in spots_state) {
            spot_obj.push(spots_state[spot])
        }
        return spot_obj.map((spot, idx) => <SpotViewMini spot={spot} />)
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
                {/* <form></form>
                <input placeholder='City' onChange={() => { }} value={updateCity}></input>
                <input type='number' placeholder='Guests'></input> */}
            </div>
            <hr style={{ width: '100%' }}></hr>
            <div className='search-results-container'>

                {handleSearch(spots_state)}
            </div>
        </div>
    )
};

export default SearchPage