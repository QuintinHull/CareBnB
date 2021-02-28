import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { getTopAvailableSpots } from "../../store/spot";
import { googleApiKey } from "../GoogleMapsComponent/apikey";
import SearchBar from "../SearchComponent/SearchBar";
import SpotViewMini from "../SpotComponent/SpotViewMini";
import { WrappedGoogleMap } from "../GoogleMapsComponent/index";
import LoginModal from "../auth/LoginForm";
import SignUpModal from "../auth/SignUpForm";

import "./home-page.css";
import NewUser from "./newUser";

const HomePageComponent = (props) => {
  const dispatch = useDispatch();
  const { authenticated, setShowLogin, setShowSignUp } = props
  const [show, setShow] = useState(true);
  const available_spots = useSelector((state) => state.spots.available_spots);

  useEffect(() => {
    dispatch(getTopAvailableSpots());
  }, [dispatch]);

  return (
    <div className="home-body">
      <div className="welcome-search-container">
        <img
          src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Fnxq8pmpbs8dwmpeg75kk15z4f1i215&option=N&idlisting=listingmedia&w=1600&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sir-pacific-production-4.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg"
          alt=""
          className="welcome-image"
        ></img>
        <div className='picture-color' />
      </div>

      <div className="home-search">
        <SearchBar />
      </div>
      {authenticated === false && <NewUser show={show} setShow={setShow} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />}
      <hr style={{ width: "80%" }}></hr>
      <h1>Experience a spot</h1>
      <div className="newest-spots-container">
        {available_spots &&
          available_spots.map((spot, idx) => (
            <SpotViewMini key={idx} spot={spot} />
          ))}
      </div>
      <hr style={{ width: "80%", marginBottom: "60px" }}></hr>
      <div className="mission-container">
        <div className="mission-statement-container">
          <h4 id="mission-statement">
            "We aim to ensure no human being has to go to sleep without
            shelter...."
          </h4>
        </div>
        <div className="amount-sheltered-container">
          <Carousel>
            <Carousel.Item id="carouselitem" interval={2000}>
              <h4 className="d-block w-100">230</h4>
              <Carousel.Caption>
                <p>People currently sheltered</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item id="carouselitem" interval={2000}>
              <h4>Thank you username for your donation</h4>
              <img
                id="namaste"
                src="https://media1.tenor.com/images/9c0252f664ac314da727cbb50daab8f1/tenor.gif"
                alt=""
              />
              <Carousel.Caption>
                <p>Donated 2 minutes ago</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr
        style={{ width: "80%", marginBottom: "60px", marginTop: "60px" }}
      ></hr>
      <div className="google-maps-container">
        <WrappedGoogleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleApiKey}`}
          loadingElement={<div style={{ height: "400px" }} />}
          containerElement={<div style={{ height: "800px" }} />}
          mapElement={<div style={{ height: "800px" }} />}
        />
      </div>
    </div >
  );
};

export default HomePageComponent;
