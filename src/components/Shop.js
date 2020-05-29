import React from "react";
import { withRouter } from "react-router-dom";
import EyeLogo from "./EyeLogo";

function Shop(props) {
  function handleEnter() {
    window.open(
      "https://kenzie.zoom.us/j/96537991945?pwd=VlBXMzdZMXVOckxqSEcxeG5kbTkwQT09",
      "_blank"
    );
  }

  function handleGoBack() {
    props.history.push("/");
  }

  return (
    <div className="shop subPage">
      <div className="innerContent">
        <button className="goBack" onClick={handleGoBack}>
          Go Back
        </button>
        <h1>Welcome to the Silk Traders</h1>
        <p>We specialize in the trade of information.</p>
        <p>
          Haven’t you noticed? The captain isn’t telling you everything. There
          are hidden things happening that are being kept from you. You need to
          know the truth. Come down to the Orlop Deck and see the forbidden
          underbelly of this ship. Persuade us kindly and we might let you in on
          the real knowings of the disguised stories you are hearing. Unleash
          yourself from the top decks of illusion and delve deep into the fabric
          of what’s been kept from you.
        </p>
        <p>We will trade you a secret for a secret.</p>
        <p>
          The bigger the secret you give us, the bigger secret we will give you.
        </p>
        <p>
          If you unveil a secret to us about the doings of this ship or of this
          world, you may become part of the biggest secret of all upon this
          ship.
        </p>
        <p>
          Remember:
          <br />
          Be Kind.
          <br />
          Respect our Shop Keepers.
          <br />
          Let others speak. <br />
          Mute your microphone when you are not talking.
          <br />
          <br />
          Otherwise you’ll walk the plank.
        </p>
        <button className="enter" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default withRouter(Shop);
