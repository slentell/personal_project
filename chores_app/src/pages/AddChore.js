import React, { useState } from 'react'
import { Button, Form, } from 'react-bootstrap';

import addChore from '../api/ChoreAPI.js'

const AddChore = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [value, setValue] = useState()
  // const [errors, setErrors] = useState(false)
  // const [loading, setLoading] = useState(true)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    let choreObj = {
      name: name,
      description: description,

      value: value
    }
    addChore(choreObj)
  }

  
  return (
    <div>
       <h2>Add a Chore</h2>
       <Form onSubmit={handleFormSubmit}>
        <div className="mb-3">
        <Form.Label>Chore name </Form.Label>
        <Form.Control id="name" type="text" value={name} placeholder="Enter Chore" onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-3">
        <Form.Label required>Description: </Form.Label>
      <Form.Control id="description" type="text" value = {description}placeholder="Describe Chore" onChange={e => setDescription(e.target.value)}/>
      </div>
      
      <div className="mb-3">
        <Form.Label required>Value: </Form.Label>
      <Form.Control id="value" type="text" placeholder="Describe Chore" onChange={e => setValue(e.target.value)}/>
      </div>
        
      <div className="d-grid">
      <Button type="submit">Add Chore</Button>
      </div>
      </Form>
      )
        
      </div>
)}

export default AddChore