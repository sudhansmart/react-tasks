import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className=" bg-dark">
        <Container>
          <Navbar.Brand style={{color:"#e7b3ce"}}> 
            My-ToDo
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header