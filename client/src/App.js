import React, { Component } from "react";
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import DescriptionPage from "./Description";
import SignUpPage from "./components/SignUp/Signup";
import SignInPage from "./components/SignUp/Signin";
import AboutPage from "./components/About/landing";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/description" component={DescriptionPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
