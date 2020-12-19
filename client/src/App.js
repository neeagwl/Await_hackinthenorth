import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { About } from './About';
import Home from './Home';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import HomePatients from './components/Patients/Home'
import Details from './components/Patients/Details'
import Appointments from './components/Doctors/Appointments'
import HomeDoctor from './components/Doctors/Home'


function App() {
  return (
    <React.Fragment>
      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/components/LogIn" component={LogIn} />
          <Route path="/components/SignUp" component={SignUp} />
          <Route path="/components/Patients/Home" component={HomePatients} />
          <Route path="/components/Patients/Details" component={Details} />
          <Route path="/components/Doctor/Appointments" component={Appointments} />
          <Route path="/components/Doctor/Home" component={HomeDoctor} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
