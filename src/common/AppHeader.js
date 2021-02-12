import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./AppHeader.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProductForm from "../products/AddProductForm";
import AddCategoryForm from "../components/AddCategoryForm";

import './AppHeader.css';

const AppHeader = (props) => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Lets Collect Cards
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {props.authenticated ? (
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" exact>
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

             <Button onClick={props.onLogout} variant="outline-light">
              Logout
            </Button>
            {/* <NavDropdown title="Add Category" id="collasible-nav-dropdown">
              <NavDropdown.Divider />
              <ProductList />
            </NavDropdown> */}
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
