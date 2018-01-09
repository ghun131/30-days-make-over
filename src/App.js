import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bulma/css/bulma.css";
import AboutUs from "./AboutUs.js";
import Story from "./Stories.js";
import challenges from "./Challenges.js";
import achievements from "./Achievements.js";
import Challenge1 from "./Challenge1.js";
import Challenge2 from "./Challenge2.js";
import Challenge3 from "./Challenge3.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar is-white is-fixed-top">
            <div id="navigationBar" className="navbar-menu">
              <Link className="navbar-item" to="/">
                About us
              </Link>
              <Link className="navbar-item" to="/Story">
                Stories
              </Link>
              <Link className="navbar-item" to="/challenges">
                Challenges
              </Link>
              <Link className="navbar-item" to="/achievements">
                Achievements
              </Link>
            </div>
          </nav>

          <hr />

          <Route exact path="/" component={AboutUs} />
          <Route path="/Story" component={Story} />
          <Route path="/challenges" component={challenges} />
          <Route path="/achievements" component={achievements} />
          <Route path="/Challenge1" component={Challenge1} />
          <Route path="/Challenge2" component={Challenge2} />
          <Route path="/Challenge3" component={Challenge3} />
        </div>
      </Router>
    );
  }
}

export default App;
