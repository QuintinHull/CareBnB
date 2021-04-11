import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import LogoutButton from "./auth/LogoutButton";

const NavBar = ({ authenticated, setAuthenticated, setShowLogin, setShowSignUp }) => {

  const history = useHistory();

  const hostASpot = (e) => {
    e.preventDefault();

    if (authenticated) {
      history.push('/spot/create')
    } else {
      setShowSignUp(true)
    }
  };

  return (
    <Navbar
      style={{ height: 90, backgroundColor: "#E2DADB" }}
      variant="light"
      sticky="top"
      className="justify-content-between"
      zIndex={2000}
    >
      <Nav className="w-30 p-0">
        <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }} href="/">
          <img
            className="logo"
            src={
              "https://cdn.discordapp.com/attachments/812747635676151882/814564949254733914/New_Project.png"
            }
          />
          <h1>CareBnb</h1>
        </Navbar.Brand>
      </Nav>
      <Nav className="w-30 p-0">
        <Nav className="my-auto mr-3">
          <Button onClick={hostASpot}>Host a Spot</Button>
        </Nav>
        {!authenticated && (
          <Nav className="my-auto mr-3">
            <Button onClick={() => setShowLogin(true)}>Log in</Button>
          </Nav>
        )}
        <Nav className="my-auto mr-3">
          {authenticated && <LogoutButton setAuthenticated={setAuthenticated} />}
        </Nav>
        {/* <NavDropdown
          title={<PersonCircle size={30} />}
          id="basic-nav-dropdown"
          className="dropbottom"
          style={{ zIndex: 1400 }}
        > */}
        {/* <NavDropdown.Item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
            {authenticated == true && (
              <>
                <NavLink to="/">
                  Manage Spots
            </NavLink>
                <NavLink to="/">
                  Account
            </NavLink>
              </>)}
            <NavLink to="/">
              FAQ
            </NavLink>
          </NavDropdown.Item>
          <hr />
          {authenticated === false && (
            <>
              <NavDropdown.Item>
                <Button onClick={() => setShowLogin(true)}>Login</Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button onClick={() => setShowSignUp(true)}>Sign Up</Button>
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
        {/* </>
          )} */}
        {/* {authenticated === true && (
            <>
              <NavDropdown.Item>
                <h1>Welcome user</h1>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LogoutButton setAuthenticated={setAuthenticated} />
              </NavDropdown.Item>
            </>
          )}
        </NavDropdown> */}
      </Nav>
    </Navbar >
  );
};

export default NavBar;
