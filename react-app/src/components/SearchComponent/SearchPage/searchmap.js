import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { NavLink } from 'react-router-dom';
import SpotViewMini from '../../SpotComponent/SpotViewMini';

const MySearchMap = withScriptjs(withGoogleMap((props) => {
    const { position, allSpots, selectedPark, setSelectedPark } = props;
    // const [selectedPark, setSelectedPark] = useState(null)


    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={position}
            position={position}
        >
            {allSpots &&
                Object.values(allSpots).map((spot) => (
                    <Marker
                        key={spot.id}
                        position={{ lat: spot.latitude, lng: spot.longitude }}
                        onClick={() => {
                            setSelectedPark(spot);
                        }}
                        icon={{
                            url: "https://i.postimg.cc/gjTZdbW3/CBlogo-Transparent.png",
                            scaledSize: new window.google.maps.Size(35, 35),
                        }}
                    />
                ))}
            {selectedPark && (
                <InfoWindow
                    position={{ lat: selectedPark.latitude, lng: selectedPark.longitude }}
                    onCloseClick={() => {
                        setSelectedPark(null);
                    }}
                >
                    <NavLink className="spot-view-map" to={`spot/${selectedPark.id}`}>
                        <SpotViewMini spot={selectedPark} />
                    </NavLink>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}));

export default MySearchMap;