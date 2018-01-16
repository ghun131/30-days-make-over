import React, { Component } from "react";
import JourneyList from "./JourneyList.js";

class JourneyMap extends Component {
  render() {
    return (
      <div>
        <h1 className="journey-map">Journey map</h1>
        <div>
          <JourneyList />
        </div>
      </div>
    );
  }
}

export default JourneyMap;
