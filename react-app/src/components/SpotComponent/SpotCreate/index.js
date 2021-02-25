import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import UploadPictureS3Client from "../../../aws/s3"
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

  const uploadFile = (e) => {
    e.preventDefault();

    UploadPictureS3Client.uploadFile(e.target.files[0], `spot-${title}-${new Date()}`)
      .then(data => console.log(data))
  };

  return (
    <div className="spot-create-body">
      <Container className="spot-create-container">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h5 className="spot-create-header">Register Your Spot</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicImage">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  Image URL:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-input"
                  type="file"
                  required
                  value={imageUrl}
                  onChange={uploadFile}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formTitle">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  Title:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-input"
                  type="text"
                  required
                  valie={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formAddress">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  Address:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-input"
                  type="text"
                  required
                  placeholder="2104 Park Street"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formCity">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  City:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-input"
                  type="text"
                  required
                  placeholder="Springfield"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group inline controlId="formState">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  State:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-input"
                  as="select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {states.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formZipCode">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  Zip Code:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-zipcode spot-create-input"
                  type="number"
                  placeholder="77449"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formDescription">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  Description:{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="spot-create-input"
                  type="text"
                  placeholder="Leave a brief description of your spot here!"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formCapacity">
                <Form.Label className="spot-create-label" column="lg" lg={2}>
                  Capacity:{" "}
                </Form.Label>
                <Form.Control
                  className="spot-create-input"
                  type="number"
                  min="1"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="spot-create-button">
              <Button type="submit" variant="outline-secondary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default SpotCreate;
