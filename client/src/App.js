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
import { NavigationBarPatient } from "./components/Patients/NavigationBar";
import HomePatients from "./components/Patients/Home";
import Details from "./components/Patients/Details";
import { NavigationBarDoctor } from "./components/Doctors/NavigationBar";
import HomeDoctor from "./components/Doctors/Home";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
}

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        {/* <NavigationBarPatient /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/components/LogIn" component={LogIn} />
          <Route path="/components/SignUp" component={SignUp} />
          <Route path="/components/Patients/Home" component={HomePatients} />
          <Route path="/components/Patients/Details" component={Details} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
