
import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Form,FormControl} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Logo from './logdocp.svg';
import './barre.css';







class Barre extends Component {
  render() { 
      return ( 
          <div className='nav-container'>
         <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> <img src={Logo} className="logo-doc"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="menu">About us</Nav.Link>
      <Nav.Link href="#link" className="menu">Career</Nav.Link>
      <NavDropdown title="Departments" id="basic-nav-dropdown" className="menu">
        <NavDropdown.Item href="#action/3.1">Marketing & PR</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Customer Success & Sales</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">IT, Product, Design & UX</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Finance & Administration</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">HR & more</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
                  
          </div>
       );
  }
}



  export default Barre;