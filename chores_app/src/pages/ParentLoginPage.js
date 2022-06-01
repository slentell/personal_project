import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const ParentLoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      navigate('/parent_dashboard');
    } else {
      setLoading(false);
    }
  }, [navigate])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    let parentLoginObj = {
      username: username,
      password: password,
    }
    fetch('http://127.0.0.1:8000/api/v1/accounts/auth/login/' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parentLoginObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.key) {
        localStorage.clear();
        localStorage.setItem('token', data.key);
        navigate('/parent_dashboard');
      } else {
        setUsername('');
        setPassword('');
        localStorage.clear();
        setErrors(true);

      }
    });
  }
  return (
    <div>
      {loading === false && <h2>Parent Login Page</h2>}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
      
      <Form onSubmit={handleFormSubmit}>
        <div className="mb-3">
        <Form.Label>Username </Form.Label>
        <Form.Control id="username" type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
        <Form.Label required>Password: </Form.Label>
      <Form.Control id="password" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
      </div>
        
      <div className="d-grid">
      <Button type="submit">Login</Button>
      </div>
      </Form>
      )}
    </div>
  )
}

export default ParentLoginPage;

