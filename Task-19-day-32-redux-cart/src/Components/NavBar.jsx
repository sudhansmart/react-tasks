import React from 'react';
import { NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const cartcount = useSelector(state=>state.cart)
  return (
   
      <Navbar   variant="dark" expand="lg" style={{backgroundColor:'blue'}}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{fontSize:'35px',fontWeight:'700'}}>Redux </Navbar.Brand>
          <NavbarToggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link as={Link} to="/cart" style={{justifyContent:'end',color:'white',fontSize:'20px',fontWeight:'400'}}> Cart <FontAwesomeIcon icon={faBagShopping} /> {cartcount.length}</Nav.Link>
            </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

export default NavBar;
