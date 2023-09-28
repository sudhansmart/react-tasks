import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import{BrowserRouter as Router,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFeather,faBook,faAddressBook} from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      
        <Navbar.Brand as={Link} to="/"><h2>Library Management System</h2></Navbar.Brand>
        <Nav className="me-auto">
        
          <Nav.Link  as={Link} to="/Addbook"><FontAwesomeIcon icon={faFeather}/>Add Book</Nav.Link>
          <Nav.Link as={Link} to="/AddAuthor"><FontAwesomeIcon icon={faUser}/>Add Author </Nav.Link>
          <Nav.Link as={Link} to="/BookList"><FontAwesomeIcon icon={faBook} />Books Data</Nav.Link>
          <Nav.Link as={Link} to="/AuthorsList"><FontAwesomeIcon icon={faAddressBook} />Authors List</Nav.Link>
        </Nav>
      
      </Container>
    </Navbar>
  );
}

export default Header;
