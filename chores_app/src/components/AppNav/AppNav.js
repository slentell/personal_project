import React from 'react'
import { Navbar, Container, Nav, NavDropdown,  } from "react-bootstrap"

import { useNavigate } from 'react-router-dom'



const AppNav = () => {

  const navigate = useNavigate();
  

  const Logout = () => {
    localStorage.clear();
    navigate('/homepage')
  }




  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/parent_dashboard">Home</Nav.Link>
        <Nav.Link onClick={Logout}>Logout</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default AppNav