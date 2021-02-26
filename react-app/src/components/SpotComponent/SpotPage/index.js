import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getSpot } from "../../../store/spot"


const SpotPage = () => {
    const dispatch = useDispatch()
    const spotId = Number.parseInt(useParams().spotId)
    const spotSelector = useSelector(state => state.spots)

    const [spotState, setSpotState] = useState("")

    useEffect(() => {
        setSpotState(dispatch(getSpot(spotId)))
    }, [dispatch])
    

    return (
        <>
            <div className = "spot-body">
                {spotSelector.spot && (
                    <>
                        <h2>{spotSelector.spot.title}</h2>
                        <h3>{spotSelector.spot.city}, {spotSelector.spot.state}</h3>
                        <img src={spotSelector.spot.image_url} alt="Spot Image"/>
                        <h4>{spotSelector.spot.description}</h4>
                        <h4>Max Capacity: {spotSelector.spot.capacity}</h4>
                        <h4>Current Availability: {spotSelector.spot.availability}</h4>
                    </>
                )}
            </div>
        </>
    )

}

export default SpotPage