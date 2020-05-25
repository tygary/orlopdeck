import React from "react";
import { withRouter } from "react-router-dom";

function Shop(props) {
  function handleEnter() {
    window.open("http://www.zoom.com", "_blank");
  }

  function handleGoBack() {
    props.history.push("/");
  }

  return (
    <div className="shop subPage">
      <div className="innerContent">
        <button onClick={handleGoBack}>Go Back</button>
        <h1>Wecome to the Silk Traders of the Orlop Deck</h1>
        <p>blah</p>

        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
}

export default withRouter(Shop);
