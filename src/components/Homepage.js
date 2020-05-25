import React from "react";
import { withRouter } from "react-router-dom";
import ShopDoor from "./ShopDoor";
import BackDoor from "./BackDoor";

function Homepage(props) {
  return (
    <div>
      <div className="upperHallway">
        <div className="hallSign">Orlop Deck</div>
      </div>
      <div className="hallway">
        <ShopDoor />
        <BackDoor />
      </div>
    </div>
  );
}

export default withRouter(Homepage);
