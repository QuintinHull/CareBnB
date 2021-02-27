import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpotViewMini from "../SpotComponent/SpotViewMini";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Geolocation from "@react-native-community/geolocation";
import mapStyles from "./mapStyles";
import { getSpots } from "../../store/spot";
import { NavLink } from "react-router-dom";
import "./GoogleMap.css"

const GoogleMapsComponent = () => {
  const allSpots = useSelector((state) => state.spots.all_spots);
  const dispatch = useDispatch();
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  const image = "react-app/src/components/GoogleMapsComponent/marker_logo.png";

  return (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 36.1627, lng: -86.7816 }}
      defaultOptions={{ styles: mapStyles }}
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
  );
};

export const WrappedGoogleMap = withScriptjs(
  withGoogleMap(GoogleMapsComponent)
);