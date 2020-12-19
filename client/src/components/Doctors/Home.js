import React, { Component } from 'react'
import './Home.css';

function HomeDoctor() {
return (
<>
<div className="info">
<div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>Naman Jain</h2>
        <p>Age:23 <br></br>
        Gender: Male<br></br>
        Disease Description: Headache<br></br>
        </p>
        <a href="#" className="btn-flip" data-back="Book" data-front="Accept Appointment"></a>
      </div>
    </div>
    <div className="card">
      <div className="card-image card2"></div>
      <div className="card-text card2">
        <h2>Riya Singh</h2>
        <p>Age: 45<br></br>
        Gender: Female<br></br>
        Disease Description: Diifculty in breathing<br></br>
        </p>
        <a href="#" className="btn-flip" data-back="Book" data-front="Accept Appointment"></a>
      </div>
    </div>
    <div className="card">
        <div className="card-image card3"></div>
        <div className="card-text card3">
        <h2>Aakash Mishra</h2>
        <p>Age: 19<br></br>
        Gender: Male<br></br>
        Disease Description: Stomach Ache<br></br>
        </p>
        <a href="./components/Testing/Navi" className="btn-flip" data-back="Book" data-front="Accept Appointment"></a>
        </div>
      </div>
      </div>
</>
)
}
export default HomeDoctor;
