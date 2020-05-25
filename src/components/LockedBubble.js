import React from "react";
import Bubble from "react-bubble";
import { Redirect } from "react-router-dom";

export default class LockedBubble extends React.Component {
  state = {
    bubbleDisplayed: false,
  };

  onMouseEnter = () => {
    this.setState({ bubbleDisplayed: true });
  };

  onMouseLeave = () => {
    this.setState({ bubbleDisplayed: false });
  };

  render() {
    const props = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    };
    return (
      <span
        className="lockedMsg"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.state.bubbleDisplayed ? (
          <span>
            {this.props.children}
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
              width={100}
            >
              It's Locked
            </Bubble>
          </span>
        ) : (
          <span>{this.props.children}</span>
        )}
      </span>
    );
  }
}
