import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './About.css';
import {NavigationBar} from './components/NavigationBar';

export const About = () => (
  <>
  <Router>
      <NavigationBar/>
  </Router>
  <div className="about-section">
      <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
          Getting treatment done when unwell is challenging. Therefore, Await tries to unburden and simplify the rest of the processes – we let you find and book health care specialists through a well-accomplished, systemized process. </p>
          <div className="skills">
              <span>Easy to Use</span>
              <span>Efficient</span>
              <span>Easy Communication</span>
          </div>
      </div>
  </div>
</>
)
