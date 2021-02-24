import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
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


    useEffect(() => dispatch(getSpots()), [dispatch])

    const locationResults = (spots, location) => {
        for (let spotId in spots) {
            if (spots[spotId].city.toLowerCase().includes(location.toLowerCase())) {
                return (<p onClick={(e) => setLocation(e.target.id)} id={`${spots[spotId].city}`}>{spots[spotId].city}</p>)
            }
        }
    }

    return (
        <div className='search-bar-container'>
            <form >
                <div className='input-wrapper'>
                    <div className='search-input-container'>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">City</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="City"
                                aria-describedby="inputGroup-sizing-default"
                                value={location}
                                onChange={updateLocation}
                            />
                        </InputGroup>
                    </div>
                    <div className='search-input-container'>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Guests</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="number"
                                aria-label="Guests"
                                aria-describedby="inputGroup-sizing-default"
                                value={guestCount}
                                onChange={updateGuestCount}
                            />
                        </InputGroup>
                    </div>
                    <div className='search-input-container'>
                        <Button onClick={() => history.push('/locate')} variant="outline-secondary">Search</Button>
                    </div>
                </div>
                <div className='location-results-box'>
                    {spots && location && locationResults(spots, location)}
                </div>

            </form>
        </div >
    )
}

export default SearchBar