import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const SpotViewLarge = ({spot}) => {
    return (
        <>
            <h4>{spot.description}</h4>
            <h3>{spot.title}</h3>
        </>
    )
}