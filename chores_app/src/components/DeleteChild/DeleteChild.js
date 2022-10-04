import React from "react";
import { Button } from "react-bootstrap";
import ChoreAPI from '../../api/ChoreAPI'
import { useChild } from "../../provider/ChildProvider";

const DeleteChild = (props) => {
  const { id } = props;
  
  const {setChildAccounts, childAccounts} = useChild();
  const handleDeleteClick = async () => {
    ChoreAPI.deleteChild(id)
    let newChildAccounts = childAccounts.filter(child => child.id !== id)
    setChildAccounts(newChildAccounts)
   
  };

  return (
    <Button variant="primary" size="sm" onClick={handleDeleteClick}>
      Delete Child
    </Button>
  );
};

export default DeleteChild;
