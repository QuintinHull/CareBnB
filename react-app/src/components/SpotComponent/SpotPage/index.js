import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getSpots } from "../../../store/spot"


const SpotPage = () => {
    const dispatch = useDispatch()
    const spotId = Number.parseInt(useParams().spotId)
    const spotSelector = useSelector(state => state.spots)

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])
    

    return (
        <>
            <div>Spot Page</div>
            {console.log(spotId)}
            {/* {spotSelector && spotSelector.map(spot => (
                <div>spot</div>
            ))} */}
            {console.log(spotSelector.all_spots)}
        </>
    )

}

export default SpotPage