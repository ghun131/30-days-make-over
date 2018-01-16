import React, { Component } from "react";

export default class ChallengesDetails extends Component {
  render() {
    return (
      <div>
        <a onClick = {() => alert('cliked')}> 
        {this.props.ChallengeApi.name}
        </a>
      </div>
    );
  }
}
