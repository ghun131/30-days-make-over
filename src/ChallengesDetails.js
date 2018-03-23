import React, { Component } from "react";
import ChallengeApi from "./api.js";

export default class ChallengesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.ChallengeApi.name
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    () => this.setState({
        textValue: this.props.ChallengeApi.text
      })
  }

  // I change my mind and add a new message.
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
