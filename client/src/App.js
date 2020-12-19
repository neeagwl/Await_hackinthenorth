import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { About } from "./About";
import Home from "./Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
}

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/components/LogIn" component={LogIn} />
          <Route path="/components/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
