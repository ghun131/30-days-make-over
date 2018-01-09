import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bulma/css/bulma.css";
import AboutUs from "./AboutUs.js";
import Story from "./Stories.js";
import challenges from "./Challenges.js";
import achievements from "./Achievements.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar is-white is-fixed-top">
            <div id="navigationBar" className="navbar-menu">
                <Link className="navbar-item" to="/">About us</Link>
                <Link className="navbar-item" to="/Story">Stories</Link>
                <Link className="navbar-item" to="/challenges">Challenges</Link>
                <Link className="navbar-item" to="/achievements">Achievements</Link>
            </div>
          </nav>

          <hr />

          <Route exact path="/" component={AboutUs} />
          <Route path="/Story" component={Story} />
          <Route path="/challenges" component={challenges} />
          <Route path="/achievements" component={achievements} />
        </div>
      </Router>
    );
  }
}

export default App;
