import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const MobileNav = () => {
    
    const [show, setShow] = useState(false);

  return (
      <>
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <StaticImage src="../assets/images/logo.jpg" alt="Belles Artz" className="nav-logo"/>
                    <button className="toggle-button" onClick={()=>setShow(!show)}>
                        <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                        <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                        <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                    </button>
                </div>
                <ul className={show ? "nav-items show-nav-items" : "nav-items" }>
                    <li className="nav-item"><Link className="nav-link" exact activeClassName="active" to="/"  eventKey="1">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/portfolio" as={Link} eventKey="2">Brand Portfolio</Link></li>
                    <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/services" as={Link} eventKey="3">Services</Link></li>
                    <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/contact" as={Link} eventKey="4">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default MobileNav