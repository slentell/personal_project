import React from 'react'
import { Button } from 'react-bootstrap'


const ParentDashboard = () => {
  return (
    <div>
    <div>ParentDashboard</div>
    <Button href='/addchild'>Add Child</Button>
    <Button href='/addchore'>Add Chore</Button>

    
    </div>
  )
}

export default ParentDashboard