import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import ChoreAPI from '../api/ChoreAPI'

// import addChild from "../api/ChoreAPI.js";
import { useAuth } from "../provider/AuthProvider.jsx";


const AddChild = () => {
  const [first_name, setFirst_Name] = useState("");
  const [dob, setDob] = useState("");
  
  const { parentAccount } = useAuth();


    
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let childObj = {
      first_name: first_name,
      dob: dob,
      parent_account: parentAccount,
    };
    console.log(localStorage.getItem('access'))
    ChoreAPI.addChild(childObj, setFirst_Name, setDob)
    
  };

  return (
    <div >
      <h2 className="d-flex justify-content-center">Add a Child</h2>
      <Container>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col>
        <div className="mb-3">
          <Form.Label>Child Name </Form.Label>
          <Form.Control
            id="childname"
            type="text"
            value={first_name}
            placeholder="Enter First Name"
            onChange={(e) => setFirst_Name(e.target.value)}
          />
        </div>
        </Col>
        <Col>
        <div className="mb-3">
          <Form.Label>Date of Birth </Form.Label>
          <Form.Control
            id="dob"
            type="date"
            value={dob}
            placeholder="Enter Birthday"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center">
          
          <Button style={{marginRight: "20px"}}type="submit">Add Child</Button>
       
          <Button style={{marginLeft: "30px"}}href="/parent_dashboard">Return to Dashboard</Button>
          
        </div>
      </Form>
      </Container>
    </div>
  );
};

export default AddChild;
