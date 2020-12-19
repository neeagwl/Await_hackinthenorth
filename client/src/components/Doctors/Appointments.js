import React, { Component } from 'react'
import './Appointments.css';

function Appointments() {
  return (
    <>
      <div className="info">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <h2>Neha Jain</h2>
            <p>Age: 33 <br></br>
        Gender: Female<br></br>
        Disease Description: Chest pain<br></br>
              <input type="checkbox" name="patient" id="checkbox" value="checkbox" />
              <lable for="checkbox">  Check Up done</lable><br></br>
              <input type="checkbox" name="patient" id="checkbox" value="checkbox" />
              <lable for="checkbox">  Patient not came</lable>
            </p>
            <a href="#" className="btn-flip" data-back="Update" data-front="Update Report"></a>
            <div className="button">
  <div className="button__text">Video Confrence...</div>
  <a target={"blank"} href="https://polar-meadow-63139.herokuapp.com/282da4ea-0f3a-40bc-9958-efc438cce7ba">
  <div className="button__wrapper">
    <div className="button__arrow"></div>
    <div className="button__border-circle"></div>
    <div className="button__mask-circle">
      <div className="button__small-circle"></div>
    </div>
  </div></a>
</div>
          </div>
        </div>
        <div className="card">
          <div className="card-image card3"></div>
          <div className="card-text card3">
            <h2>Subham Mishra</h2>
            <p>Age: 29<br></br>
        Gender: Male<br></br>
        Disease Description: Hand fracture<br></br>
        <input type="checkbox" name="patient" id="checkbox" value="checkbox" />
              <lable for="checkbox">  Check Up done</lable><br></br>
              <input type="checkbox" name="patient" id="checkbox" value="checkbox" />
              <lable for="checkbox">  Patient not came</lable>
            </p>
            <a href="#" className="btn-flip" data-back="Update" data-front="Update Report"></a>
            <div className="button">
  <div className="button__text">Video Confrence...</div>
  <a target={"blank"} href="https://polar-meadow-63139.herokuapp.com/282da4ea-0f3a-40bc-9958-efc438cce7ba">
  <div className="button__wrapper">
    <div className="button__arrow"></div>
    <div className="button__border-circle"></div>
    <div className="button__mask-circle">
      <div className="button__small-circle"></div>
    </div>
  </div></a>
</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Appointments;