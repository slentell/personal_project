import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const AppNav = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/homepage");
  };

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#999a98" }}>
        <Container>
          <Navbar.Brand href="">Chore Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/parent_dashboard">Parent Dashboard</Nav.Link>
              <Nav.Link href="/addchild">Add Child</Nav.Link>
              <Nav.Link onClick={Logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNav;
