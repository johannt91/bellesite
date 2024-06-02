import React from "react"
import Layout from "../components/Layout"
import CorporateSlides from "../components/CorporateCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const Corporate = ({ location }) => {
  // const title = location.state && location.state.galleryTitle

  return (
    <Layout>
      <section>
        <CorporateSlides title={"Creative Content"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Corporate Identity</h2>
          <div className={Style.description}>
            <p>
              Let us design distinctive corporate identities for you that will
              embody the essence of your business. Our Corporate Identity Design
              services cover everything from logo creation and business
              stationery to comprehensive brand guidelines. We ensure a
              consistent and professional look across all your corporate
              materials by establishing a carefully selected colour palette and
              font profile to reinforce your brand's image and foster trust with
              your audience.
            </p>
            <Link to="/contact" className={Style.consultationLink}>
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Corporate
