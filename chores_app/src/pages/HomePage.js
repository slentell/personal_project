import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div>
      <Container>
 
    <Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Chore Management</Card.Title>
    <Card.Text>
      Keep kids motivated and on task!
    </Card.Text>
    <Button variant="primary" href ="/signup"> Sign Up</Button>
    <Button variant="primary" href="/parent_login">Parent Login</Button>
    <Button variant="primary" href="/child_login">Child Login</Button>
  </Card.Body>
</Card>
  
</Container>

    </div>
  )
}

export default HomePage