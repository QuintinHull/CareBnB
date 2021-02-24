import React, { useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const { search } = useLocation()
    const { city, guest } = queryString.parse(search)

    return (
        <div>
            <h1>Places </h1>
            <h1>{city}</h1>
            <h1>{guest}</h1>
        </div>
    )
};

export default SearchPage