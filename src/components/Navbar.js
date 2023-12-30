import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const Navigation = () => {
  return (
      <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <StaticImage src="../assets/images/logo.jpg" alt="Belles Artz" className="nav-logo"/>
              <ul className="nav-items">
                  <li className="nav-item"><Link className="nav-link" exact activeClassName="active" to="/"  eventKey="1">HOME</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/about" as={Link} eventKey="2">OUR STORY</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/services" as={Link} eventKey="3">SERVICES</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/team" as={Link} eventKey="4">MEET THE TEAM</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/quote" as={Link} eventKey="5">GET A QUOTE</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/contact" as={Link} eventKey="6">CONTACT INFO</Link></li>
              </ul>
            </div>
        </div>
      </nav>
  );
};

export default Navigation;


