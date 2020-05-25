import React from "react";
import { withRouter, Redirect } from "react-router-dom";

function Backroom(props) {
  let hasPassword = localStorage.getItem("KNOWS_THE_PASSWORD") === "true";
  if (!hasPassword) {
    return <Redirect to="/"></Redirect>;
  }

  function handleEnterQueue() {
    alert("entered!");
  }

  function handleGoBack() {
    props.history.push("/");
  }

  return (
    <div className="backroom subPage">
      <div className="innerContent">
        <button onClick={handleGoBack}>Go Back</button>
        <h1>Welcome!</h1>
        <p>Join us...</p>
        <button onClick={handleEnterQueue}>Enter the Queue</button>
      </div>
    </div>
  );
}

export default withRouter(Backroom);
