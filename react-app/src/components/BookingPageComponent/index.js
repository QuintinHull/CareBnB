import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as bookingActions from "../../store/booking";


const BookingPageComponent = ({ authenticated }) => {
  const dispatch = useDispatch();
  const spotId = Number.parseInt(useParams().spotId);

  const [errors, setErrors] = useState([]);
  const [group_size, setGroupsize] = useState("");


  const updateGroupsize = (e) => {
    setGroupsize(e.target.value);
  };

  const onBookingSubmit = async (e) => {
    e.preventDefault();
    console.log('spotId: ', spotId)
    dispatch(bookingActions.addBooking({spotId, group_size}))
    // Redirect('/')
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
        <button type="submit">Book!</button>
      </div>
    </form>
  );
};

export default BookingPageComponent;
