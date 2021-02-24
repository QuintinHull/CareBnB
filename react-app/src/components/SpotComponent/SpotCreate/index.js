import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { createSpot } from "../../../store/spot";
import { useHistory } from "react-router-dom";

import "./SpotCreate.css";

const SpotCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const createdSpot = useSelector((state) => state.spots.all_spots);

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

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0]);
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");

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
    };
    let addedSpot = await dispatch(createSpot(newSpot));

    console.log("----->", addedSpot);
    history.push(`/spot/${addedSpot.spot.id}`);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h5>Register Your Spot</h5>
        <Form.Group controlId="formBasicImage">
          <Form.Label column="lg" lg={2}>Image URL: </Form.Label>
          <Form.Control
            type="text"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label column="lg" lg={2}>Title: </Form.Label>
          <Form.Control
            type="text"
            required
            valie={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label column="lg" lg={2}>Address: </Form.Label>
          <Form.Control
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label column="lg" lg={2}>City: </Form.Label>
          <Form.Control
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Row>
          <Form.Group inline controlId="formState">
            <Col>
              <Form.Label>State: </Form.Label>
              <Form.Control as="select" value={state} onChange={(e) => setState(e.target.value)}>
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group controlId="formZipCode">
            <Col>
              <Form.Label>Zip Code: </Form.Label>
              <Form.Control
                className="spot-create-zipcode"
                type="number"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              ></Form.Control>
            </Col>
          </Form.Group>
        </Row>
        <Form.Group controlId="formDescription">
          <Form.Label column="lg" lg={2}>Description: </Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formCapacity">
          <Form.Label column="lg" lg={2}>Capacity: </Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit: </Button>
      </Form>
    </div>
  );
};

export default SpotCreate;
