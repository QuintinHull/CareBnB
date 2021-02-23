import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const SpotViewLarge = ({spot}) => {
    return (
        <div className="spot-view-large-body">
            <img src={spot.image_url} alt="Spot Image"/>
            <h4>{spot.description}</h4>
            <h3>{spot.title}</h3>
            <h4>{spot.city}, {spot.state}</h4>
            <h4>{spot.availability}</h4>
        </div>
    )
}