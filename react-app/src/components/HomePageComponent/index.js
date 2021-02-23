import React from "react"
import './home-page.css'

const HomePageComponent = () => {
    return (
        <div className='home-body'>
            <div className='welcome-search-container'>
                <div className='home-search-bar-container'>
                    <h4>Search Bar Component</h4>
                </div>
                <h4>Welcome background image</h4>
            </div>
            <div className='newest-spots-container'>
                <h4>Loop over 10 newest spots and render SpotViewLarge components</h4>
            </div>
            <div className='mission-container'>
                <h4>Horizontal container with two inner containers</h4>
                <div className='mission-statement-container'>
                    <h4>Mission statement</h4>
                </div>
                <div className='amount-sheltered-container'>
                    <h4>Amount of people who are sheltered</h4>
                </div>
            </div>
        </div>
    )
}

export default HomePageComponent