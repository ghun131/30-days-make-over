import React, { Component } from "react";
import ChallengeApi from "./api.js";

export default class ChallengesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ""
    };
  }

  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() =>
            this.setState({ textValue: this.props.ChallengeApi.text })
          }
        >
          {this.props.ChallengeApi.name}
        </a>
      </div>
    );
  }
}
