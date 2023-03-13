import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../img/logoNav.png';


function NavHeader() {
  const [isExpand, setIsExpand] = useState(false)
  return (
    <Navbar className="nav-header" sticky="top" bg="dark" variant="dark" expand="md" expanded={isExpand}>
      <Container fluid className="header-container">
        <Navbar.Toggle onClick={() => setIsExpand(prev => !prev)} aria-controls="basic-navbar-nav" />

        <Navbar.Brand >
          <img
            alt="logo"
            src={logo}
            height="50"
            className="d-inline-block align-middle"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/main">Hours & Location</Nav.Link>
            <Nav.Link href="/main">About Us</Nav.Link>
            <Nav.Link href="/main">Events</Nav.Link>
          </Nav>
          <hr className="header-hr" />
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
