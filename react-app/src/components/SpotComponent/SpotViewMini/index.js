import React from "react";

const SpotViewMini = ({ spot }) => {
  return (
    <div className="spot-view-mini-body">
      {/* <img src={spot.image_url} alt="Spot Image" /> */}
      <h4>{spot.description}</h4>
      <h3>{spot.title}</h3>
      <h4>
        {spot.city}, {spot.state}
      </h4>
      <h4>{spot.availability}</h4>
    </div>
  );
};

export default SpotViewMini;
