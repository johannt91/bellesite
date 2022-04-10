import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const Navigation = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <div>
          <StaticImage src="../assets/images/logo.jpg" alt="Belles Artz" className="nav-logo"/>
        </div>
          <ul className="nav-items">
            <li className="nav-item"><Link exact activeClassName="active" to="/"  eventKey="1">About</Link></li>
            <li className="nav-item"><Link activeClassName="active" to="/portfolio" as={Link} eventKey="2">Brand Portfolio</Link></li>
            <li className="nav-item"><Link activeClassName="active" to="/services" as={Link} eventKey="3">Services</Link></li>
            <li className="nav-item"><Link activeClassName="active" to="/contact" as={Link} eventKey="4">Contact Us</Link></li>
          </ul>
      </nav>
    </header>
  );
};

export default Navigation;


