import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSpots } from '../../../store/spot';

import './search-bar.css'

const SearchBar = () => {
    const dispatch = useDispatch()

    const [location, setLocation] = useState('');
    const [guestCount, setGuestCount] = useState(0)

    const spots = useSelector(state => state.spots.all_spots)

    const updateLocation = (event) => setLocation(event.target.value);
    const updateGuestCount = (event) => setGuestCount(event.target.value);


    useEffect(() => dispatch(getSpots()), [dispatch])

    const locationResults = (spots, location) => {
        for (let spotId in spots) {
            if (spots[spotId].city.toLowerCase().includes(location.toLowerCase())) {
                return (<Link>{spots[spotId].city}</Link>)
            }
        }
    }

    return (
        <div className='search-bar-container'>
            <form>
                <div className='input-wrapper'>
                    <div className='search-input-container'>
                        <p>City</p>
                        <input value={location} onChange={updateLocation} id='search-input-field' placeholder='Search a city'></input>
                    </div>
                    <div className='search-input-container'>
                        <p>Guests</p>
                        <input type='number' value={guestCount} onChange={updateGuestCount} id='guest-input-field' placeholder='How many people?' />
                    </div>
                    <div className='search-input-container'>
                        <button>Search</button>
                    </div>
                </div>
                <div className='location-results-box'>
                    {spots && location && locationResults(spots, location)}
                </div>

            </form>
        </div>
    )
}

export default SearchBar