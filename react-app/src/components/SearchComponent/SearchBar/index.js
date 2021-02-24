import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom';
import { getSpots } from '../../../store/spot';

import './search-bar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [location, setLocation] = useState('');
    const [guestCount, setGuestCount] = useState(0)

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

    return (
        <div className='search-bar-container'>
            <form className='search-bar-form'>
                <label >Search a city</label>
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
                        onChange={updateGuestCount}
                    />
                </InputGroup>
                <ArrowRightCircleFill onClick={() => history.push('/locate')} />
                {/* <div className='location-results-box'>
                    {spots && location && locationResults(spots, location)}
                </div> */}
            </form>
        </div >
    )
}

export default SearchBar