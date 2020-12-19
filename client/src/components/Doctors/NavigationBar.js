import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    font-family:"Times New Roman"; 
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
`;

export const NavigationBarDoctor = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Await for Doctor</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}} className="nav-toogle"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About Us</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/components/LogIn">Log In</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/components/SignUp">Sign Up</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
