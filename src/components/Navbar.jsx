import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const Navigation = () => {
  return (
      <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <StaticImage src="../assets/images/bellesartzlogo.svg" alt="Belles Artz" className="nav-logo"/>
              <ul className="nav-items">
                  <li className="nav-item"><Link className="nav-link" to="/" >DESIGNS</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about" as={Link} >ABOUT</Link></li>
                  {/* <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/services" as={Link} >SERVICES</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="#team" as={Link} >MEET THE TEAM</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/quote" as={Link} >GET A QUOTE</Link></li> */}
                  <li className="nav-item"><Link className="nav-link" to="/contact" as={Link} >CONTACT</Link></li>
              </ul>
            </div>
        </div>
      </nav>
  );
};

export default Navigation;


