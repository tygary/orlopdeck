import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import HoverBubble from "./HoverBubble";
import Bubble from "react-bubble/build/Bubble";

class BackDoor extends Component {
  state = {
    hasKnocked: false,
    password: "",
    windowMessage: "",
  };

  handleClickPorthole = () => {
    this.setState((state) => {
      return {
        hasKnocked: !state.hasKnocked,
        windowMessage: "What's the Password?",
      };
    });
  };

  handleSubmitPassword = () => {
    // What are you doing here? Cheating?
    // Go to the store and interact to get the password.
    if (this.state.password === "test") {
      localStorage.setItem("KNOWS_THE_PASSWORD", "true");
      this.props.history.push("/backroom");
    } else {
      this.setState({
        windowMessage: "Nope, Try again!",
      });
    }
  };

  render() {
    let eyes = this.state.hasKnocked ? (
      <div className="eyes">
        <img src="./eyes.png"></img>
        <Bubble
          style={{
            container: {
              minHeight: "30px",
              lineHeight: "30px",
              textAlign: "center",
            },
            bar: {
              backgroundColor: "rgb(238, 238, 238)",
            },
            arrow: {
              left: {
                borderRightColor: "rgb(238, 238, 238)",
              },
              right: {
                borderTopColor: "rgb(238, 238, 238)",
              },
            },
          }}
          height={20}
          width={180}
        >
          {this.state.windowMessage}
        </Bubble>
      </div>
    ) : (
      ""
    );

    let form = this.state.hasKnocked ? (
      <div className="passwordForm">
        <input
          type="password"
          value={this.state.password}
          onChange={(event) => this.setState({ password: event.target.value })}
        ></input>
        <button onClick={this.handleSubmitPassword}>Enter</button>
      </div>
    ) : (
      ""
    );

    return (
      <div className="backDoor">
        <div className="doorFrame">
          <div className="door">
            <div className="sign">Private</div>
            <div
              className="porthole clickable"
              onClick={this.handleClickPorthole}
            >
              <div className="innerPorthole">
                <HoverBubble
                  message="Knock..."
                  enabled={!this.state.hasKnocked}
                >
                  <div className="glass">{eyes}</div>
                </HoverBubble>
                <div className="lugnut noon"></div>
                <div className="lugnut two"></div>
                <div className="lugnut four"></div>
                <div className="lugnut six"></div>
                <div className="lugnut eight"></div>
                <div className="lugnut ten"></div>
              </div>
            </div>

            <div className="doorKnobPlate">
              <div className="innerDoorKnob">
                <div className="doorKnob clickable">
                  <HoverBubble message="It's Locked">
                    <div style={{ width: "100%", height: "100%" }}></div>
                  </HoverBubble>
                </div>

                <div className="keyhole"></div>
              </div>
            </div>
            {form}

            <div className="hinge top"></div>
            <div className="hinge middle"></div>
            <div className="hinge bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BackDoor);
