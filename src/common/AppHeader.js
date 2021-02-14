import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import collectLogo from '../img/collect-logo.png';

import "./AppHeader.css";

const AppHeader = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
      <img className="logo" src={collectLogo} alt="Collect" />
        Let's Collect
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {props.authenticated ? (
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/product" exact>
              My Collection
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add-card">
              Add Card
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add-category">
              Add Category
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">
              Portfolio
            </Nav.Link>
            <Button onClick={props.onLogout} variant="outline-light">
              Logout
            </Button>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;
