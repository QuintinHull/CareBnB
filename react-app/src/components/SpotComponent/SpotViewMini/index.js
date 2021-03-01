import React from "react";
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SpotViewMini.css'

const SpotViewMini = ({ spot }) => {
  const history = useHistory();
  // const test_spot = {
  //   image_url:'https://i.ytimg.com/vi/tiZ8u6PNTK8/maxresdefault.jpg',
  //   image_url2:'https://upload.wikimedia.org/wikipedia/commons/1/15/Mount_Massive.jpg',
  //   title:"Steve's house",
  //   description:'If you need a place to stay, come crash at my dig! the furniture is a bit blocky but I will feed you steak',
  //   city:'Atlantis',
  //   state:'Georgia',
  //   availability:5
  // }

  return (
    // <div className="spot-view-mini-body">
    //   {/* <img src={spot.image_url} alt="Spot Image" /> */}
    //   <h4>{spot.description}</h4>
    //   <h3>{spot.title}</h3>
    //   <h4>
    //     {spot.city}, {spot.state}
    //   </h4>
    //   <h4>{spot.availability}</h4>
    // </div>

    <Card className='spotcard mx-5'>
      <Card.Img variant="top" src={spot.image_url} style={{ height: '12rem' }} />
      <br></br>
      <Card.Title>{spot.title}</Card.Title>
      <Card.Text>{spot.description}</Card.Text>
      <Card.Text className="text-muted text-right">
        <ul>{spot.city}, {spot.state}</ul>
        <ul>availability: {spot.availability}</ul>
        <Button onClick={() => { history.push(`/spot/${spot.id}`) }}>Book</Button>
      </Card.Text>
    </Card>
  );
};

export default SpotViewMini;
