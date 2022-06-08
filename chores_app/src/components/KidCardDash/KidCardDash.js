import React from "react";
import { Container, Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import ChoreList from "../ChoreList/ChoreList";
import DeleteChild from "../DeleteChild/DeleteChild";

import { useChild } from "../../provider/ChildProvider";



const KidCardDash = () => {
  const { childAccounts } = useChild();




  const handlePayoutClick = async (e, assigned_user) => {
    let zeroBalance = 0


    const updateObj = {
      balance: zeroBalance,
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


  }



  return (
    <div>
      <Container>
        <Row>
          <CardGroup className="d-flex">
            {childAccounts.map((child_acct, index) => (
              <Col key={index}>
                <Card
                  className="d-flex justify-content-around"
                  style={{
                    width: "25rem",
                    marginBottom: "30px",
                    borderRadius: "30px",
                  }}
                >
                  <Card.Header
                    className="d-flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <Card.Title>{child_acct.first_name}</Card.Title>
                    <Button
                      className="d-flex justify-content-flexend align-items-end"
                      href="/childdashboard/"
                      value={child_acct.id}
                    >
                      View
                    </Button>
                    <DeleteChild id={child_acct.id} />
                  </Card.Header>
                  <ChoreList
                    balance={child_acct.balance}
                    assigned_user={child_acct.id}
                  />

                  <Card.Footer>
                  <p className="d-inline">Balance:</p> {child_acct.balance}
                  <Button
                  variant="secondary"
                  size="sm"
                  
                  onClick={(e) => handlePayoutClick(e, child_acct.id)}
                >
                  Pay OUT!
                </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default KidCardDash;
