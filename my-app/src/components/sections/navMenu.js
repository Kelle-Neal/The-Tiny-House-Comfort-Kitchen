import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import useWindowDimensions from '../helper';

function NavMenu() {
  const { width: windowWidth } = useWindowDimensions()

  return (
    <Navbar sticky="top" collapseOnSelect expand={true} bg="light" variant="light" className="nav-secondary">
      <Container fluid className="nav-directory">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {windowWidth > 576 ?
              <>
                <Nav.Link href="#">Breakfast</Nav.Link>
                <Nav.Link href="#">Appetizers</Nav.Link>
                <Nav.Link href="#">Lunch</Nav.Link>
                <Nav.Link href="#">Dinner</Nav.Link>
                <Nav.Link href="#">Drinks</Nav.Link>
                <Nav.Link href="#">Specials</Nav.Link>
              </>
              :
              <NavDropdown title="Menu" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#">Breakfast</NavDropdown.Item>
                <NavDropdown.Item href="#">Appetizers</NavDropdown.Item>
                <NavDropdown.Item href="#">Lunch</NavDropdown.Item>
                <NavDropdown.Item href="#">Dinner</NavDropdown.Item>
                <NavDropdown.Item href="#">Drinks</NavDropdown.Item>
                <NavDropdown.Item href="#">Specials</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
