import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import SpotViewMini from '../../SpotComponent/SpotViewMini'
import { searchSpots } from '../../../store/spot';

const SearchPage = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const { city, guest } = queryString.parse(search)

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

    return (
        <div>
            {<h1>Spots available to book in '{city}' for {guest} people</h1>}
            {/* <h1>{city}</h1>
            <h1>{guest}</h1> */}
            {/* <SpotViewMini spot={spots_state} /> */}
            {handleSearch(spots_state)}
        </div>
    )
};

export default SearchPage