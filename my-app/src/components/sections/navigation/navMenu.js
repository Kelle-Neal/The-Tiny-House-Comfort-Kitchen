import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import useWindowDimensions from '../../helper';

function NavMenu() {
  const { width: windowWidth } = useWindowDimensions()

  return (
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
  );
}

export default NavMenu;
