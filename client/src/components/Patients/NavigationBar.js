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

export const NavigationBarPatient = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/components/Patients/Home">Await for Patient</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}} className="nav-toogle"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/components/Patients/Home">Select Doctor</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">Abos</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/components/Patinet/LoginPatient">For Patient</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/components/Doctor/LoginDoc">For Doctor</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
