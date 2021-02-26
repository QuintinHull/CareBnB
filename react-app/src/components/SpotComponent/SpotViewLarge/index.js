import React from "react"
import './SpotViewLarge.css'

const SpotViewLarge = ({ spot }) => {
    return (
        <div className="spot-view-large-body">
            

            <h3>{spot.description}</h3>
            <h3>{spot.title}</h3>
            <h4>{spot.city}, {spot.state}</h4>
            <h4>{spot.availability}</h4>
            <img src={spot.image_url} alt="Spot Image" className='spot-view-large-image' />

        </div>
    )
}

export default SpotViewLarge