import React from "react";

import KidCardDash from "../components/KidCardDash/KidCardDash";
import AddChore from "../components/AddChore/AddChore";
import Advice from "../components/Advice/advice";

const ParentDashboard = () => {
  


  

    
  

  return (
    <div>
      <div className="d-flex justify-content-center" style={{marginBottom:"15px"}}>
        <Advice />
        </div>
    <div>
      <AddChore />
      </div>
      <div className="d-flex justify-content-center">
        <h1>Chore Lists</h1>
        </div>
        <div>
      <KidCardDash />
      </div>
    </div>
  );
};

export default ParentDashboard;
