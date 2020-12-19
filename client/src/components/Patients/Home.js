import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {NavigationBarPatient} from './NavigationBar';
import './Home.css';

function HomePatients() {
return (
<>
<Router>
  <NavigationBarPatient/>
</Router>
<div className="info">
<div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>Dr. Kiran Dev</h2>
        <p>Physician</p>
        <a href="./Details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">4</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">123</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">4 Year</div>
          <div className="type">Experience</div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image card2"></div>
      <div className="card-text card2">
        <h2>Dr. Rahul Kumar</h2>
        <p>Dermatologist</p>
        <a href="./Details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
      </div>
      <div className="card-stats card2">
      <div className="stat">
          <div className="value">4.2</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">101</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">10 Year</div>
          <div className="type">Experience</div>
        </div>
      </div>
    </div>
    <div className="card">
        <div className="card-image card3"></div>
        <div className="card-text card3">
          <h2>Dr. Emily Sharma</h2>
          <p>Psychiatrist, Neurologist</p>
        <a href="./Details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
        </div>
        <div className="card-stats card3">
        <div className="stat">
          <div className="value">4.1</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">56</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">12 Year</div>
          <div className="type">Experience</div>
        </div>
        </div>
      </div>
      </div>
</>
)
}
export default HomePatients;