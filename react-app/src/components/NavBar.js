import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

const NavBar = ({ authenticated, setAuthenticated, setShowLogin, setShowSignUp }) => {
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
          <NavLink to="/spot/create">Host a Spot</NavLink>
        </Nav>
        <NavDropdown
          title={<PersonCircle size={30} />}
          id="basic-nav-dropdown"
          className="dropbottom"
          style={{ zIndex: 1400 }}
        >
          <NavDropdown.Item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/">
              Manage Spots
            </NavLink>
            <NavLink to="/">
              Account
            </NavLink>
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
            </>
          )}
          {authenticated === true && (
            <>
              <NavDropdown.Item>
                <h1>Welcome Mustafa</h1>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LogoutButton setAuthenticated={setAuthenticated} />
              </NavDropdown.Item>
            </>
          )}
        </NavDropdown>
      </Nav>
    </Navbar >
  );
};

export default NavBar;
