import React from "react";
import { withRouter } from "react-router-dom";
import ShopDoor from "./ShopDoor";
import BackDoor from "./BackDoor";

function Homepage(props) {
  return (
    <div class="homePage">
      <div className="upperHallway">
        <div className="hallSign">Orlop Deck</div>
      </div>
      <div className="hallway">
        <div className="doorContainer">
          <ShopDoor />
        </div>
        <div className="doorContainer">
          <BackDoor />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Homepage);
