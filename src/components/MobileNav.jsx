import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const MobileNav = () => {
    
    const [show, setShow] = useState(false);

  return (
      <>
        <nav className="mobile-navbar">
            <div className="nav-header">
                <StaticImage src="../assets/images/bellesartzlogo.svg" alt="Belles Artz" className="nav-logo"/>
                <button className="toggle-button" onClick={()=>setShow(!show)}>
                    <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                    <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                    <span className={show ? "toggle-button__bar bar-open" : "toggle-button__bar bar-close"}></span>
                </button>
            </div>
            <ul className={show ? "nav-items show-nav-items" : "nav-items" }>
            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/" >HOME</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/about" as={Link} >OUR STORY</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/services" as={Link} >SERVICES</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="#team" as={Link} >MEET THE TEAM</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/quote" as={Link} >GET A QUOTE</Link></li>
                  <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/contact" as={Link} >CONTACT INFO</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default MobileNav