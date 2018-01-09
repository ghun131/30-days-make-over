import React, { Component } from "react";
import Challenge1 from "./Challenge1";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";

class challenges extends Component {
  render() {
    return (
      <div>
        <h1 className="challenges">Challenges</h1>
        <div className="list-wrapper">
          <div className="list-style">
            <ul>
              <li>
                <a href="/Challenge1">Hang out with your friends</a>
              </li>
              <li>
                <a href="/Challenge2">Have a pet</a>
              </li>
              <li>
                <a href="/Challenge3">Travel to a distant place</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default challenges;
