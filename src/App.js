import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
// import GreetPage from "./components/GreetPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/User-auth/">
        <div className="App">
          <div className="App__Aside">
            <img src={logo} alt="" />
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route path="/sign-up" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
            {/* <Route path="/greet" component={GreetPage}></Route> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
