import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import collectLogo from '../img/collect-logo.png';
import { PersonFill } from 'react-bootstrap-icons';

import "./AppHeader.css";

const AppHeader = (props) => {
  return (
    <Navbar>
      <Navbar.Brand as={NavLink} to="/">
      <img className="logo" src={collectLogo} alt="Collect" />
        Let's Collect
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {props.authenticated ? (
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/product" exact>
              My Collection
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add-card">
              Add Card
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/add-category">
              Add Category
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link onClick={props.onLogout} variant="outline-light">
                Logout
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              <PersonFill />
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        )}
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default AppHeader;
