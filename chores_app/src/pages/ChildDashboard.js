import React from 'react'
import KidCardPage from '../components/KidCardPage/KidCardPage'

const ChildDashboard = (props) => {
  console.log(props.value)
  return (
    <div><KidCardPage props={props}/></div>
  )
}

export default ChildDashboard