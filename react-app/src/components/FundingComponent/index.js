import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import * as fundingActions from "../../store/funding";


const FundingComponent = ({ authenticated }) => {
  const dispatch = useDispatch();
  const spotId = Number.parseInt(useParams().spotId);

  const [errors, setErrors] = useState([]);
  const [sponsorship_cost, setSponsCost] = useState("");


  const updateSponsCost = (e) => {
    setSponsCost(e.target.value);
  };

  const onFundingSubmit = async (e) => {
    e.preventDefault();
    dispatch(fundingActions.addFunding({spotId, sponsorship_cost}))
    // Redirect('/')
  }
 

  return (
    <form onSubmit={onFundingSubmit}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <h1>Donate</h1>
      <label htmlFor="sponsorship_cost">How much would you like to donate?</label>
      <div>
        <input
          name="sponsorship_cost"
          type="decimal"
          placeholder="$$"
          value={sponsorship_cost}
          onChange={updateSponsCost}
        />
      </div>
      <div>
        <Button type="submit" variant="secondary" size="sm">Donate!</Button>
      </div>
    </form>
  );
};

export default FundingComponent;
