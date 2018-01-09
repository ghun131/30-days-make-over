import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bulma/css/bulma.css";
import AboutUs from "./AboutUs.js";
import Story from "./Stories.js";
import JourneyMap from "./JourneyMap.js";
import challenges from "./Challenges.js";
import achievements from "./Achievements.js";
import ContactUs from "./ContactUs.js";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <nav class="navbar is-white is-fixed-top">
            <div id="navigationBar" class="navbar-menu">
              <a class="navbar-item">
                <Link to="/">About us</Link>
              </a>
              <a class="navbar-item">
                <Link to="/JourneyMap">Journey map</Link>
              </a>
              <a class="navbar-item">
                <Link to="/Story">Stories</Link>
              </a>
              <a class="navbar-item">
                <Link to="/challenges">Challenges</Link>
              </a>
              <a class="navbar-item">
                <Link to="/achievements">Achievements</Link>
              </a>
              <a class="navbar-item">
                <Link to="/ContactUs">Contact us</Link>
              </a>
            </div>
          </nav>

          <hr />

          <Route exact path="/" component={AboutUs} />
          <Route path="/JourneyMap" component={JourneyMap} />
          <Route path="/Story" component={Story} />
          <Route path="/challenges" component={challenges} />
          <Route path="/achievements" component={achievements} />
          <Route path="/ContactUs" component={ContactUs} />
        </div>
      </Router>
    );
  }
}

export default App;
