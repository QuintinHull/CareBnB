import React, { useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import * as bookingActions from "../../store/booking";


const BookingPageComponent = ({ authenticated, spotTitle, spotAvailability }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const spotId = Number.parseInt(useParams().spotId);

  const [errors, setErrors] = useState([]);
  const [group_size, setGroupsize] = useState("");


  const updateGroupsize = (e) => {
    setGroupsize(e.target.value);
  };

  const onBookingSubmit = async (e) => {
    e.preventDefault();

    dispatch(bookingActions.addBooking({spotId, group_size}))
    window.alert(`Thank you for booking your stay at, ${spotTitle}!`)
    history.push("/")
  }
 

  return (
    <form onSubmit={onBookingSubmit}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <h1>Book your stay</h1>
      <label htmlFor="group_size">How many people are you booking?</label>
      <div>
        <input
          name="group_size"
          type="integer"
          placeholder="Group Size"
          value={group_size}
          onChange={updateGroupsize}
        />
      </div>

        <div>
          {spotAvailability <= 0 && 
            <p>No more spots</p>
          }
          {spotAvailability > 0 && 
            <Button type="submit" variant="secondary" size="sm">Book!</Button>
          }
        </div>

    </form>
  );
};

export default BookingPageComponent;
