import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BookingPageComponent from "../../BookingPageComponent/index";
import FundingComponent from "../../FundingComponent/index"
import "./SpotPage.css"
import { getSpot } from "../../../store/spot";


const SpotPage = () => {
    const dispatch = useDispatch()
    const spotId = Number.parseInt(useParams().spotId)
    const spotSelector = useSelector(state => state.spots)
    const spotAvailability = useSelector(state => state.spots.availability)
    // const spotTitle = spotSelector.spot.title

    const [spotState, setSpotState] = useState("")

    useEffect(() => {
        setSpotState(dispatch(getSpot(spotId)))
    }, [dispatch])
    

    return (
        <>
            <div className = "spot-container">
                {spotSelector.spot && (
                    <div className="spot-body">
                        <div className="spot-image-and-info">
                            <div className="spot-image">
                                <img src={spotSelector.spot.image_url} alt="Spot Image"></img>
                            </div>
                            <div className="spot-info">
                                <div className="spot-info-div">
                                    <h3>{spotSelector.spot.title}</h3>
                                    <hr className="spot-hr"></hr>
                                    <h3>{spotSelector.spot.city}, {spotSelector.spot.state}</h3>
                                    <hr className="spot-hr"></hr>
                                    <h3>{spotSelector.spot.description}</h3>
                                    <hr className="spot-hr"></hr>
                                    <h3>Max Capacity: {spotSelector.spot.capacity}</h3>
                                    <h3>Current Availability: {spotSelector.spot.availability}</h3>
                                </div>
                                <div className="spot-donate-and-book">
                                    <div className="spot-donate">
                                        <FundingComponent />
                                    </div>
                                    <div className="spot-book">
                                        <BookingPageComponent spotAvailability = {spotSelector.spot.availability} spotTitle = {spotSelector.spot.title}/>
                                </div>
                        </div>
                            </div>
                        </div>
                    </div>
                    
                        // <img className="spot-image" src={spotSelector.spot.image_url} alt="Spot Image" rounded></img>
                        //     <div className="spot-title">{spotSelector.spot.title}</div>
                        //         <div className="spot-city">{spotSelector.spot.city}, {spotSelector.spot.state}</div>
                        //             <div className="spot-description">{spotSelector.spot.description}</div>
                        //                 <div className="spot-capacity">Max Capacity: {spotSelector.spot.capacity}</div>
                        //                     <div className="spot-availability">Current Availability: {spotSelector.spot.availability}</div>
                        // <div className="booking-component-container">
                        //             <BookingPageComponent />
                        //             <FundingComponent />
                        // </div>
                    
                )}
            </div>
        </>
    )

}

export default SpotPage