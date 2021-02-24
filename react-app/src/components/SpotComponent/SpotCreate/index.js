import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpot } from "../../../store/spot";
import { useHistory } from "react-router-dom";

const SpotCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const createdSpot = useSelector((state) => state.spot);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availability, setAvailability] = useState("");

  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSpot = {
      image_url: imageUrl,
      title,
      address,
      city,
      state,
      zipcode,
      description,
      capacity,
      availability,
    };
    await dispatch(createSpot(newSpot));
    if (createdSpot) {
      console.log(createdSpot);
      history.push(`/spot/${createdSpot.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Register Your Spot</h5>
        <div>
          <label>Image URL: </label>
          <input
            type="text"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            required
            valie={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <div>
          <label>State: </label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Zip Code: </label>
          <input
            type="number"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Description: </label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Capacity: </label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Availability: </label>
          <input
            type="number"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit: </button>
      </form>
    </div>
  );
};

export default SpotCreate;
