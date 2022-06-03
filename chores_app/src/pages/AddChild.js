import React, { useState } from 'react'
import { Button, Form, } from 'react-bootstrap';
import addChild from '../api/ChoreAPI.js'


const AddChild = () => {
  const [firstName, setFirstName] = useState('')
  const [dob, setDob] = useState()
  const [parentID, setParentID] = useState()
  // const [errors, setErrors] = useState(false)
  // const [loading, setLoading] = useState(true)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    let childObj = {
      firstName: firstName,
      dob: dob,
      parentID: parentID
    }
    console.log(childObj)

    addChild(childObj)
  }

  
  return (
    <div>
       <h2>Add a Child</h2>
       <Form onSubmit={handleFormSubmit}>
        <div className="mb-3">
        <Form.Label>Child Name </Form.Label>
        <Form.Control id="childname" type="text" value={firstName} placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
        <Form.Label>Date of Birth </Form.Label>
        <Form.Control id="dob" type="date" value={dob} placeholder="Enter Birthday" onChange={e => setDob(e.target.value)} />
        </div>
        <div className="mb-3">
        <Form.Label>Parent </Form.Label>
        <Form.Control id="childname" type="text" value={parentID} placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} />
        </div>
        
        
      <div className="d-grid">
      <Button type="submit">Add Child</Button>
      </div>
      </Form>
      
        
      </div>
)}

export default AddChild