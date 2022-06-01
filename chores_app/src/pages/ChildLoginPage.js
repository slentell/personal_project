import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const ChildLoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      navigate('/child_dashboard');
    } else {
      setLoading(false);
    }
  }, [navigate])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    let childLoginObj = {
      username: username,
      password: password,
    }
    fetch('http://127.0.0.1:8000/api/v1/accounts/auth/login/' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(childLoginObj)
    })
    .then(res => res.json())
    .then(data => {
      if (data.key) {
        localStorage.clear();
        localStorage.setItem('token', data.key);
        navigate('/child_dashboard');
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
      {loading === false && <h2>Login Page</h2>}
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
      <Form onSubmit={handleFormSubmit}>
        <Form.Label>Username: </Form.Label>
        <Form.Control id="username" type="text" value={username} required placeholder="username" onChange={e => setUsername(e.target.value)} />
        <Form.Label required>Password: </Form.Label>
        <Form.Control id="password" type="password" value={password} required placeholder="password" onChange={e => setPassword(e.target.value)} />
        {' '}
        <br />
        <Button type="submit" value='Login'>Login</Button>
      </Form>
      )}
    </div>
  )
}

export default ChildLoginPage