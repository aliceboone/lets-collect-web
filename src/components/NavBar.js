import React, {Component} from 'react';
import {Navbar, Nav}from 'react-bootstrap';

class NavBar  extends Component{
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">LetsGo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Baseball</Nav.Link>
            <Nav.Link href="#pricing">Football</Nav.Link>
            <Nav.Link href="#pricing">Basketball</Nav.Link>
          </Nav>
          <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default NavBar;
