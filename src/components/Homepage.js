import React from "react";
import { withRouter } from "react-router-dom";
import ShopDoor from "./ShopDoor";
import BackDoor from "./BackDoor";
import BulletinBoard from './BulletinBoard/BulletinBoard';

function Homepage(props) {
  return (
    <div class="homePage">
      <div className="upperHallway">
        <div className="hallSign">Orlop Deck</div>
      </div>
      <div className="hallway">
        <div className="hallwayItemContainer">
          <ShopDoor />
        </div>
        <div className="hallwayItemContainer">
          <BackDoor />
        </div>
        <div className="hallwayItemContainer">
          <BulletinBoard />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Homepage);
