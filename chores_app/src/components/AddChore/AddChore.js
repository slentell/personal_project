import React, { useState, useEffect } from "react";
import { Button, Form , Container, Row, Col } from "react-bootstrap";
import ChoreAPI from '../../api/ChoreAPI'
import { useChore } from "../../provider/ChoreProvider";


const AddChore = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [assigned_user, setAssigned_User] = useState();
  const [value, setValue] = useState();
  const [child_accts, setChild_Accts] = useState([]);

  const { setAction } = useChore()



  useEffect(() => {
    const getChildByParent = async () => {
      await ChoreAPI.childByParent(child_accts, setChild_Accts)
  }
  getChildByParent();
  }, [child_accts]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let choreObj = {
      name: name,
      description: description,
      assigned_user: assigned_user,
      value: value,
    };
    console.log(choreObj)
    let response = await fetch("http://127.0.0.1:8000/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify(choreObj),
    });

    setAction("UPDATED");
    return await response.json;
  };
  

  return (
    <Container style={{backgroundColor:"#36558f"}}>
      <h2>Add a Chore</h2>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col>
        <div className="mb-3">
          <Form.Label >Chore name </Form.Label>
          <Form.Control className=""
            id="name"
            type="text"
            value={name}
            
            placeholder="Enter Chore"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        </Col>
        <Col>
        <div className="mb-3">
          <Form.Label required>Value: </Form.Label>
          <Form.Control
            id="value"
            type="text"
            placeholder="Chore Value"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        </Col>
        <Col>
        <div className="mb-3" >
          <Form.Label className="d-inline">Assign chore to:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setAssigned_User(e.target.value);
            }}
          >
            <option>Select child</option>
            {child_accts.map((child_acct) => {
              return (
                <option value={child_acct.id} key={child_acct.id}>
                  {child_acct.first_name}
                </option>
              );
            })}
          </Form.Select>
        </div>
        </Col>
        
        </Row>
        <div className="mb-3">
          <Form.Label required>Description: </Form.Label>
          <Form.Control
            id="description"
            type="text"
            value={description}
            placeholder="Describe Chore"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        
        <div className="w-20">
          <Button type="submit">Add Chore</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddChore;
