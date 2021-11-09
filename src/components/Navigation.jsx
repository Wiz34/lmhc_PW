import React from 'react';
import { Nav, Navbar, } from "react-bootstrap";
import  logo from '../grid-images/paris_logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar bg="white" expand="sm" >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className='logoimg'
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="collapse navbar-collapse justify-content-end">
          <Nav >
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >

    </>

  );
}



export default Navigation;