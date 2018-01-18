import React, { Component } from "react";
import ChallengeApi from "./api.js";

export default class ChallengesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.ChallengeApi.name
    };
  }

  /*
  handleClick() {
    () => {
      e.preventDefault()
      this.setState({
        isChallengeXVisible: true,
        textValue: this.props.ChallengeApi.text
      })
    }
  }
  */

  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() => this.setState({textValue: this.props.ChallengeApi.text})}
        >
          {this.state.textValue}
        </a>
      </div>
    );
  }
}
