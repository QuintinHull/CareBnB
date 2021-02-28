import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { Redirect, useHistory } from 'react-router-dom';
import { getSpots, searchSpots } from '../../../store/spot';

import './search-bar.css'

const SearchBar = () => {
    const curr_location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [location, setLocation] = useState('');
    const [guestCount, setGuestCount] = useState(1)

    const spots = useSelector(state => state.spots.all_spots)

    const updateLocation = (event) => setLocation(event.target.value);
    const updateGuestCount = (event) => setGuestCount(event.target.value);


    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const locationResults = (spots, location) => {
        for (let spotId in spots) {
            if (spots[spotId].city.toLowerCase().includes(location.toLowerCase())) {
                return (<p onClick={(e) => setLocation(e.target.id)} id={`${spots[spotId].city}`}>{spots[spotId].city}</p>)
            }
        }
    }

    const search_bar = document.getElementById('search-bar-container-scrolled')
    const search_button = document.getElementById('search-butt')

    document.onscroll = () => {
        let top = window.pageYOffset
        if (top >= 75 && search_bar) {
            search_button.onmouseover = () => { search_button.style.color = '#c0c5c3' }
            search_button.onmouseout = () => { search_button.style.color = '#DAE2DF' }
            search_button.style.transition = "all .2s ease"
            search_bar.style.transition = "all .2s ease"

        } else if (top < 75 && search_bar) {
            search_button.onmouseover = () => { search_button.style.color = '#616060' }
            search_button.onmouseout = () => { search_button.style.color = '#6D696A' }
        }
    }



    const executeSearch = (e) => {
        dispatch(searchSpots(guestCount, location))
        return history.push(`/locate?city=${location}&guest=${guestCount}`)
    }

    return (
        <div className='search-bar-container' id='search-bar-container-scrolled'>
            <form className='search-bar-form'>
                <label >Where are you going?</label>
                <InputGroup className="mb-3 city-input">
                    <FormControl
                        aria-label="City"
                        aria-describedby="inputGroup-sizing-default"
                        value={location}
                        onChange={updateLocation}
                    />
                </InputGroup>
                <label >How many guests?</label>
                <InputGroup className="mb-3 guest-input">
                    <FormControl
                        type="number"
                        aria-label="Guests"
                        aria-describedby="inputGroup-sizing-default"
                        value={guestCount}
                        min={'1'}
                        onChange={updateGuestCount}
                    />
                </InputGroup>
                <ArrowRightCircleFill id='search-butt' onClick={executeSearch} />
                {/* <div className='location-results-box'>
                    {spots && location && locationResults(spots, location)}
                </div> */}
            </form>
        </div >
    )
}

export default SearchBar