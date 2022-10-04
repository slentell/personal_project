import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useChore } from "../../provider/ChoreProvider";

import ChoreAPI from "../../api/ChoreAPI";


const ChoreList = (props) => {
  const [chores, setChores] = useState([]);
  const { assigned_user, balance } = props;

  const { action, setAction } = useChore();

  useEffect(() => {
    const getChoreByChild = async () => {
      await ChoreAPI.choreByChild(assigned_user, chores, setChores);
      await setAction("UPDATE");
    };
    getChoreByChild();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chores, action]);

  const handleChoreClick = async (e) => {
    e.preventDefault();
    console.log({ assigned_user });
    let prevBalance = parseFloat(balance);
    let addValue = parseFloat(e.target.value);
    let newBalance = prevBalance + addValue;
    console.log(newBalance);

    const updateObj = {
      balance: newBalance,
    };
    await fetch(
      `http://127.0.0.1:8000/api/accounts/updatechild/${assigned_user}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify(updateObj),
      }
    ).then((response) => response.json())
    .then(window.location.reload())


  };
  const handleDeleteClick = async (e, id) => {
    
    await ChoreAPI.deleteChore(id)
  
    setAction("LOADING")
    
    
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {chores.map((chore, index) => (
            <tr key={index}>
              <td>{chore.name}</td>
              <td>{chore.value}</td>
              <td>
                <Button
                  variant="secondary"
                  size="sm"
                  value={chore.value}
                  onClick={(e) => handleChoreClick(e, chore.id)}
                >
                  Pay Me!
                </Button>
              </td>
              <td>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(e) => handleDeleteClick(e, chore.id)}
                >Delete</Button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ChoreList;
