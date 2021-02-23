import React from "react"
import './home-page.css'

// const test = async () => {
//     const response = await fetch('/api/spots/top-available');
//     const spots = await response.json();
//     console.log(spots)
// }

const HomePageComponent = () => {
    return (
        <div className='home-body'>
            <div className='welcome-search-container'>
                <div className='home-search-bar-container'>
                    <h4>Search Bar Component with background image</h4>
                </div>
            </div>
            <div className='newest-spots-container'>
                <h4>Loop over 10 spots that have the highest availability</h4>
            </div>
            <div className='mission-container'>
                <div className='mission-statement-container'>
                    <h4>Mission statement</h4>
                </div>
                <div className='amount-sheltered-container'>
                    <h4>Amount of people who are sheltered</h4>
                </div>
            </div>
            <div className='google-maps-container'>
                <h4>Google Maps Here</h4>
            </div>
        </div>
    )
}

export default HomePageComponent