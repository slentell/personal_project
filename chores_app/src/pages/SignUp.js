import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirst_Name] = useState('')
  const [last_name, setLast_Name] = useState('')
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [is_parent, setIs_Parent] = useState(false)
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      navigate('/homepage')
    } else {
      setLoading(false);
    } 
  }, [navigate]);
  


  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    
    const user = {
      username: username,
      email: email,
      first_name: first_name,
      last_name: last_name,
      password1: password1,
      password2: password2,
      is_parent: is_parent,
    }
    console.log(username)
    console.log(email)
    console.log(first_name)
    console.log(last_name)
    console.log(password1)
    console.log(password2)
    console.log(is_parent)
      fetch('http://127.0.0.1:8000/api/v1/accounts/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(data.key)
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          navigate('/homepage')
        } else {
          setUsername('');
          setEmail('');
          setFirst_Name('');
          setLast_Name('');
          setPassword1('');
          setPassword2('');
          setIs_Parent(false)
          localStorage.clear();
          setErrors(true)
        }

      });
    };
  return (
    <div>
        {loading === false && <h3>Sign Up</h3>}
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
         <Form onSubmit={handleSignupSubmit}>
         <div className="mb-3">
        <Form.Label>Username: </Form.Label>
        <Form.Control id="username" type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
        <Form.Label>Email: </Form.Label>
        <Form.Control id="email" type="text" placeholder="Enter email"  onChange={e => setEmail(e.target.value)} required/>
        </div>
        <div className="mb-3">
        <Form.Label required>First Name: </Form.Label>
        <Form.Control id="firstName" type="text" placeholder="Enter first name"  onChange={e => setFirst_Name(e.target.value)} required />
        </div>
        <div className="mb-3">
        <Form.Label required>Last Name: </Form.Label>
        <Form.Control id="lastName" type="text" placeholder="Enter last name"  onChange={e => setLast_Name(e.target.value)} required />
        </div>
        <div className="mb-3">
        <Form.Label required>Password: </Form.Label>
        <Form.Control id="password1" type="password" placeholder="password" onChange={e => setPassword1(e.target.value)} required/>
        </div>
        <div className="mb-3">
        <Form.Label required>Password: </Form.Label>
        <Form.Control id="password2" type="password" placeholder="Confirm password"  onChange={e => setPassword2(e.target.value)} required />
        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={e => setIs_Parent(true)}/>
        <InputGroup.Text id="inputGroup-sizing-default">I am a Parent</InputGroup.Text>
        </InputGroup>
        
        
        
        
        
        </div>
        
        <div className="d-grid">
        <Button type="submit" value='Signup'>Submit</Button>
        
        </div>
      </Form>
    </div>

  )
}

export default SignUp