import React, { Component } from "react";
import ChallengesDetails from "./ChallengesDetails.js";

export default class ChallengesList extends Component {
  render() {
    return (
      <div>
        {this.props.ChallengeApi.map(ch => <ChallengesDetails ChallengeApi={ch} />)}
      </div>
    );
  }
}
