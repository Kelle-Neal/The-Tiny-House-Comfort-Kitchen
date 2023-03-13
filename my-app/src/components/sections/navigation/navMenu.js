import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import useWindowDimensions from '../../helper';
import logo from './logoNav.png';


function NavMenu() {
  const { width: windowWidth } = useWindowDimensions()
  const [isExpand, setIsExpand] = useState(false)

  return (
    <>
      <Navbar className="nav-header fixed-top" bg="dark" variant="dark" expand="md" expanded={isExpand}>
        <Container className="header-container">
          <Navbar.Toggle onClick={() => setIsExpand(prev => !prev)} aria-controls="basic-navbar-nav" />

          <Navbar.Brand >
            <img
              alt="logo"
              src={logo}
              height="40"
              className="d-inline-block align-middle"
              href="#landing"
            />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#LocNav">Hours & Location</Nav.Link>
              <Nav.Link href="#aboutUs">About Us</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
            </Nav>
            <hr className="header-hr" />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar collapseOnSelect expand={true} bg="light" variant="light" className="nav-secondary">
        <Container fluid className="nav-directory">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {windowWidth > 576 ?
                <>
                  <Nav.Link href="#breakfastMenu">Breakfast</Nav.Link>
                  <Nav.Link href="#appetizersMenu">Appetizers</Nav.Link>
                  <Nav.Link href="#lunchMenu">Lunch</Nav.Link>
                  <Nav.Link href="#dinnerMenu">Dinner</Nav.Link>
                  <Nav.Link href="#drinksMenu">Drinks</Nav.Link>
                </>
                :
                <NavDropdown title="Menu" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#breakfastMenu">Breakfast</NavDropdown.Item>
                  <NavDropdown.Item href="#appetizersMenu">Appetizers</NavDropdown.Item>
                  <NavDropdown.Item href="#lunchMenu">Lunch</NavDropdown.Item>
                  <NavDropdown.Item href="#dinnerMenu">Dinner</NavDropdown.Item>
                  <NavDropdown.Item href="#drinksMenu">Drinks</NavDropdown.Item>
                </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>  
  );
}

export default NavMenu;
