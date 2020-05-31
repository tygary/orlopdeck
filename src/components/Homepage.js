import React from "react";
import { withRouter } from "react-router-dom";
import ShopDoor from "./ShopDoor";
import BackDoor from "./BackDoor";
import BulletinBoard from "./BulletinBoard/BulletinBoard";

function Homepage(props) {
  const { history } = props;

  return (
    <div className="homePage">
      <div className="upperHallway">
        <div className="hallSign">Orlop Deck</div>
      </div>
      <div className="hallway">
        <div className="hallwayItemContainer">
          <ShopDoor />
        </div>
        <div className="hallwayItemContainer">
          <BulletinBoard history={history} />
        </div>
        <div className="hallwayItemContainer">
          <BackDoor />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Homepage);
