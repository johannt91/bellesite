import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const MobileNav = () => {
    
    const [show, setShow] = useState(false);

  return (
      <>
        <nav className="mobile-navbar">
            <div className="nav-header">
                <StaticImage src="../assets/images/logo.jpg" alt="Belles Artz" className="nav-logo"/>
                <button className="toggle-button" onClick={()=>setShow(!show)}>
                    <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                    <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                    <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                </button>
            </div>
            <ul className={show ? "nav-items show-nav-items" : "nav-items" }>
                <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/" >About</Link></li>
                <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/portfolio" as={Link} >Brand Portfolio</Link></li>
                <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/services" as={Link} >Services</Link></li>
                <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/contact" as={Link} >Contact Us</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default MobileNav