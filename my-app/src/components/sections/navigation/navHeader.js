import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logoNav.png';


function NavHeader() {
  const [isExpand, setIsExpand] = useState(false)
  return (
    <Navbar className="nav-header fixed-top" bg="dark" variant="dark" expand="md" expanded={isExpand}>
      <Container className="header-container">
        <Navbar.Toggle onClick={() => setIsExpand(prev => !prev)} aria-controls="basic-navbar-nav" />

        <Navbar.Brand >
          <img
            alt="logo"
            src={ logo }
            height="40"
            className="d-inline-block align-middle"
            href="#home"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#footer">Hours & Location</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
          </Nav>
          <hr className="header-hr" />
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
