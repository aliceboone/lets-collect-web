import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./AppHeader.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProductForm from "../products/AddProductForm";
import AddCategoryForm from "../components/AddCategoryForm";
// import ProductList from "../products/ProductList";

import { Link, NavLink } from 'react-router-dom';
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
              Cards
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
              Profile
            </Nav.Link>
            <Button onClick={props.onLogout} variant="outline-light">
              Logout
            </Button>
            <NavDropdown title="Add Card" id="collasible-nav-dropdown">
              <NavDropdown.Divider />
              <AddProductForm />
            </NavDropdown>
            <NavDropdown title="Add Category" id="collasible-nav-dropdown">
              <NavDropdown.Divider />
              <AddCategoryForm />
            </NavDropdown>
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




//     <header className="app-header">
//     <div className="container">
//         <div className="app-options">
//             <nav className="app-nav fixed-top navbar-light bg-light">
//                 <Link to="/" className="navbar-brand navbar-nav mr-auto text-center"><h1 className="display-3">LetsGo Collection</h1></Link>
//                 { props.authenticated ? (
//                     <ul className="nav justify-content-end">
//                       <li>
//                             <NavLink to="/">Home</NavLink>        
//                         </li>
//                         <li>
//                             <NavLink to="/product">Collection</NavLink>        
//                         </li>
//                         <li>
//                             <NavLink to="/product/new">Manage Cards</NavLink>        
//                         </li>
//                         <li>
//                             <NavLink to="/profile">Profile</NavLink>
//                         </li>
//                         <li>
//                             <a className="thumbnail" onClick={ props.onLogout }>Logout</a>
//                         </li>
//                     </ul>
//                 ): (
//                     <ul className="nav justify-content-end">
//                         <li>
//                             <NavLink to="/login">Login</NavLink>        
//                         </li>
//                         <li>
//                             <NavLink to="/signup">Signup</NavLink>        
//                         </li>
//                     </ul>
//                 )}
//             </nav>
//         </div>
//     </div>
// </header>


  );
};

export default AppHeader;
