import React, { Component } from 'react'
import './Home.css';

function HomeDoctor() {
return (
<>
<div className="info">
<div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>Name 1</h2>
        <p>Age:23 <br></br>
        Gender: Female<br></br>
        Disease Description: Head Ache<br></br>
        </p>
        <a href="#" className="btn-flip" data-back="Book" data-front="Accept Appointment"></a>
      </div>
    </div>
    <div className="card">
      <div className="card-image card2"></div>
      <div className="card-text card2">
        <h2>Name 2</h2>
        <p>Age: <br></br>
        Gender: <br></br>
        Disease Description: <br></br>
        </p>
        <a href="#" className="btn-flip" data-back="Book" data-front="Accept Appointment"></a>
      </div>
    </div>
    <div className="card">
        <div className="card-image card3"></div>
        <div className="card-text card3">
        <h2>Name 3</h2>
        <p>Age: <br></br>
        Gender: <br></br>
        Disease Description: <br></br>
        </p>
        <a href="./components/Testing/Navi" className="btn-flip" data-back="Book" data-front="Accept Appointment"></a>
        </div>
      </div>
      </div>
</>
)
}
export default HomeDoctor;