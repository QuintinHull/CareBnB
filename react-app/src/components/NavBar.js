import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { PersonCircle } from 'react-bootstrap-icons';


const NavBar = ({ setAuthenticated }) => {
  return (
    <Navbar style={{ height: 90, backgroundColor: '#E2DADB' }} variant="light" sticky="top" className="justify-content-between">
      <Nav className="w-30 p-0">
        <Navbar.Brand href="/">
          <Image src={'https://cdn.discordapp.com/attachments/812747635676151882/814564949254733914/New_Project.png'}  style={{ height: '12rem' }}/>
        </Navbar.Brand>
      </Nav>
      <Nav className="w-30 p-0">
      </Nav>
      <Nav className="w-30 p-0">
        <Nav className="my-auto mr-3">
          <NavLink to="/spot">Host a Spot</NavLink>
        </Nav>
        <NavDropdown title={<PersonCircle size={30} />} id="basic-nav-dropdown" className="dropleft">
          <NavDropdown.Item>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

    </Navbar>

  );
}

export default NavBar;