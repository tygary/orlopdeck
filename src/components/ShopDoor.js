import React from "react";
import { withRouter } from "react-router-dom";
import EyeLogo from "./EyeLogo";

function ShopDoor(props) {
  function handleClick() {
    props.history.push("/shop");
  }

  return (
    <div className="shopDoor">
      <div className="doorFrame">
        <div className="door ajar clickable" onClick={handleClick}>
          <div className="sign">Shop</div>
          <div className="porthole">
            <div className="innerPorthole">
              <div className="glass"></div>
              <div className="lugnut noon"></div>
              <div className="lugnut two"></div>
              <div className="lugnut four"></div>
              <div className="lugnut six"></div>
              <div className="lugnut eight"></div>
              <div className="lugnut ten"></div>
            </div>
          </div>
          <div className="eyeLogo">
            <EyeLogo className="eyeLogo" />
          </div>
          <div className="doorKnobPlate">
            <div className="innerDoorKnob">
              <div className="doorKnob"></div>
              <div className="keyhole"></div>
            </div>
          </div>
          <div className="hinge top"></div>
          <div className="hinge middle"></div>
          <div className="hinge bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ShopDoor);
