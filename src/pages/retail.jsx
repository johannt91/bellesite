import React from "react"
import Layout from "../components/Layout"
import RetailSlides from "../components/retailCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const Retail = () => {
  return (
    <Layout>
      <section>
        <RetailSlides title={"Retail Branding & Design"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Retail Branding &amp; Design</h2>
          <div className={Style.description}>
            <p>
              Transform your retail space with cohesive and visually stunning
              brand identities that captivate customers from the moment they
              walk in. Our services include everything from logo design and
              packaging to in-store signage, product displays and interior
              graphics, all tailored to reflect your brand's personality and
              enhance the shopping experience. Elevate your retail environment
              and leave a lasting impression with our expert branding and design
              solutions.
            </p>
          </div>
          <Link to="/contact" className={Style.consultationLink}>
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Retail
