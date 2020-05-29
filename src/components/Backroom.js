import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import EyeLogo from "./EyeLogo";

function Backroom(props) {
  let hasPassword = localStorage.getItem("KNOWS_THE_PASSWORD") === "true";
  if (!hasPassword) {
    return <Redirect to="/"></Redirect>;
  }

  function handleEnterQueue() {
    window.open("https://forms.gle/C6XeDGQUXM7QnBEw7", "_blank");
  }

  function handleGoBack() {
    props.history.push("/");
  }

  return (
    <div className="backroom subPage">
      <div className="innerContent">
        <button className="goBack" onClick={handleGoBack}>
          Go Back
        </button>
        <h1>Welcome, Seeker of the Truth!</h1>
        <div className="shopEyeLogo">
          <EyeLogo />
        </div>
        <p>
          Do you wish to see through the web of lies before you? We Silk Traders
          are an ever-expanding group seeking to fight against the waves of
          misinformation.
        </p>
        <p>
          We would like you to join us. Only the chosen can proceed. You have
          shown us that you are one of the unique few on this ship with an open
          eye.
        </p>
        <p>
          Fill out the form below and click on to the next part of your journey.
        </p>
        <button className="enter" onClick={handleEnterQueue}>
          Join Us
        </button>
      </div>
    </div>
  );
}

export default withRouter(Backroom);
