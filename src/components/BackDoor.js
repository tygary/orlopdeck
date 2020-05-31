import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import HoverBubble from "./HoverBubble";
import Bubble from "react-bubble/build/Bubble";
import EyeLogo from "./EyeLogo";
import md5 from "md5";

class BackDoor extends Component {
  state = {
    hasKnocked: false,
    isHovered: false,
    password: "",
    windowMessage: "",
  };

  handleClick = () => {
    this.setState((state) => {
      return {
        hasKnocked: !state.hasKnocked,
        windowMessage: "What's the Password?",
      };
    });
  };

  handleSubmitPassword = (event) => {
    event.preventDefault();
    let answer = this.state.password;

    answer = answer.toLocaleLowerCase().replace(" ", "").replace("the", "");

    // What are you doing here? Cheating?
    // Go to the store and interact to get the password.
    if (md5(answer) === "ab334feeb31c05124cb73fa12571c2f6") {
      localStorage.setItem("KNOWS_THE_PASSWORD", "true");
      this.props.history.push("/backroom");
    } else {
      this.setState({
        windowMessage: "Nope, Try again!",
      });
    }
  };

  formClick = (event) => {
    event.stopPropagation();
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
      <form
        className="passwordForm"
        onClick={this.formClick}
        onSubmit={this.handleSubmitPassword}
      >
        <input
          type="password"
          data-lpignore="true"
          value={this.state.password}
          onChange={(event) => this.setState({ password: event.target.value })}
        ></input>
        <button>Enter</button>
      </form>
    ) : (
      ""
    );

    return (
      <div className="backDoor">
        <div className="doorFrame">
          <div
            className="door clickable"
            onMouseEnter={() => this.setState({ isHovered: true })}
            onMouseLeave={() =>
              this.setState({
                isHovered: false,
                hasKnocked: false,
              })
            }
            onClick={this.handleClick}
          >
            <HoverBubble message="Knock..." enabled={!this.state.hasKnocked}>
              <div style={{ width: "100%", height: "100%" }}></div>
            </HoverBubble>
            <div className="sign">Private</div>
            <div className="porthole">
              <div className="innerPorthole">
                <div className="glass">{eyes}</div>
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
