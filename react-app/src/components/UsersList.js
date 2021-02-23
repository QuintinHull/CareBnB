import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { createSpot, deleteSpot, getSpots } from "../store/spot";
function UsersList() {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getSpots())
  }, [dispatch])

  const testFunc = () => {
    // const image_url = 'www.test.com'
    // const title = 'Test 3spot title'
    // const address = 'Test 3spot address'
    // const city = 'Test 3city'
    // const state = 'TX'
    // const zipcode = 76107
    // const description = 'Test 3description'
    // const capacity = 400
    // const availability = 400

    // const payload = {
    //   image_url,
    //   title,
    //   address,
    //   city,
    //   state,
    //   zipcode,
    //   description,
    //   capacity,
    //   availability,
    // }
    // dispatch(createSpot(payload))


    // dispatch(deleteSpot({ spotId: 14 }))
  }

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.first_name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <button onClick={testFunc}>Test</button>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
