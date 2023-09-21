import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./header.css"
function Header() {
  return (
    <>
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand  as={NavLink} to={"/"}>weather-daily</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
          <Nav.Link as={NavLink} to={"/turkey"}>Türkiye</Nav.Link>
          <Nav.Link as={NavLink} to={"/world-wide"}>World Wide</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Header