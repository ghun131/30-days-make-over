import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from "react-router-dom";
import AboutUs from "./AboutUs.js";
import Story from "./Stories.js";
import JourneyMap from "./JourneyMap.js";
import challenges from "./Challenges.js";
import achievements from "./Achievements.js";
import ContactUs from "./ContactUs.js";

const stories = ({ match }) => (
  <div>
    <h2>Stories</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:storyId`} component={Story} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a story.</h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/JourneyMap">Journey map</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/challenges">Challenges</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={AboutUs} />
      <Route path="/JourneyMap" component={JourneyMap} />
      <Route path="/stories" component={stories} />
      <Route path="/challenges" component={challenges} />
      <Route path="/achievements" component={achievements} />
      <Route path="/ContactUs" component={ContactUs} />
    </div>
  </Router>
);
export default App;
