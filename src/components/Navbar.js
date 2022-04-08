import React from "react";
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import { StaticImage } from "gatsby-plugin-image"

import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <header className="header">
    
      <Navbar collapseOnSelect expand="md" className="px-4 navbar fixed-top bg-white">
        <Navbar.Brand><StaticImage src="../assets/images/logo.jpg" alt="Belles Artz" className="nav-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link exact activeClassName="active" to="/" as={Link} eventKey="1">About</Nav.Link>
            <Nav.Link activeClassName="active" to="/portfolio" as={Link} eventKey="2">Brand portfolio</Nav.Link>
            <Nav.Link activeClassName="active" to="/services" as={Link} eventKey="3">Services</Nav.Link>
            <Nav.Link activeClassName="active" to="/contact" as={Link} eventKey="4">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </header>
  );
};

export default Navigation;


