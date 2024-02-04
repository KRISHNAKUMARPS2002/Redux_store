import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartProducts = useSelector(state => state.cart);
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href="#">Redux Tool Kit</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Products</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to="/cart">My Bag {cartProducts.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
