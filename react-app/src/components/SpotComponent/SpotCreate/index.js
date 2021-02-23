import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSpot } from "../../../store/spot";
import { useHistory } from "react-router-dom";

const SpotCreate = () => {
  const dispatch = useDispatch();

  const [image_url, setImage_url] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availability, setAvailability] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSpot = {
      image_url,
      title,
      address,
      city,
      state,
      zipcode,
      description,
      capacity,
      availability,
      // host_id: current_user.id
    };
    let createdSpot = await dispatch(createSpot(newSpot));
    if (createdSpot) {
      history.push(`/spot/${createdSpot.newSpot.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Register Your Spot</h5>
        <div>
          <label>Image URL: </label>
          <input></input>
        </div>
        <div>
          <label>Title: </label>
          <input></input>
        </div>
        <div>
          <label>Address: </label>
          <input></input>
        </div>
        <div>
          <label>City: </label>
          <input></input>
        </div>
        <div>
          <label>State: </label>
          <select></select>
        </div>
        <div>
          <label>Zip Code: </label>
          <input type="number"></input>
        </div>
        <div>
          <label>Description: </label>
          <textarea></textarea>
        </div>
        <div>
          <label>Capacity: </label>
          <input type="number"></input>
        </div>
        <div>
          <label>Availability: </label>
          <input type="number"></input>
        </div>
        <button type="submit">Submit: </button>
      </form>
    </div>
  );
};

export default SpotCreate;
