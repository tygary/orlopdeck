import React from "react";
import { withRouter } from "react-router-dom";
import ShopDoor from "./ShopDoor";
import BackDoor from "./BackDoor";

function Homepage(props) {
  return (
    <div className="hallway">
      <ShopDoor />
      <BackDoor />
    </div>
  );
}

export default withRouter(Homepage);
