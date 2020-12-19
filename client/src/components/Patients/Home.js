import React, { Component } from 'react'
import './Home.css';

function HomePatients() {
return (
<>
<div className="info">
<div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>Name 1</h2>
        <p>Specs</p>
        <a href="#" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">4</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">5123</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">2 Year</div>
          <div className="type">Experience</div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-image card2"></div>
      <div className="card-text card2">
        <h2>Name 2</h2>
        <p>Specs</p>
        <a href="./Details" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
      </div>
      <div className="card-stats card2">
      <div className="stat">
          <div className="value">4</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">5123</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">2 Year</div>
          <div className="type">Experience</div>
        </div>
      </div>
    </div>
    <div className="card">
        <div className="card-image card3"></div>
        <div className="card-text card3">
          <h2>Name 3</h2>
          <p>Specs</p>
        <a href="#" className="btn-flip" data-back="Book" data-front="Set Appointment"></a>
        </div>
        <div className="card-stats card3">
        <div className="stat">
          <div className="value">4</div>
          <div className="type">Star</div>
        </div>
        <div className="stat order">
          <div className="value">5123</div>
          <div className="type">reviews</div>
        </div>
        <div className="stat">
          <div className="value">2 Year</div>
          <div className="type">Experience</div>
        </div>
        </div>
      </div>
      </div>
</>
)
}
export default HomePatients;