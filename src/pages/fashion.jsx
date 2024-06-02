import React from "react"
import Layout from "../components/Layout"
import FashionSlides from "../components/FashionCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const Fashion = ({ location }) => {
  // const title = location.state && location.state.galleryTitle

  return (
    <Layout>
      <section>
        <FashionSlides title={"Fashion"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Fashion</h2>
          <div className={Style.description}>
            <p>
              We understand the power of visual storytelling in the fashion
              industry and the importance of crafting a unique fashion brand
              identity to captivate your audience. Here's how we can help:
            </p>
            <p>
              <strong>Brand Identity Development:</strong> Create a distinctive
              and memorable logo that encapsulates your fashion brand's ethos
              and aesthetic. Develop a cohesive color palette and typography
              that reflect your brand's personality and resonate with your
              target demographic. Establish clear guidelines to ensure
              consistency across all brand assets, maintaining a unified brand
              identity.
            </p>
            <p>
              <strong>Social Media Graphics:</strong> Design visually
              captivating graphics for your social media platforms that reflect
              your brand's aesthetic and engage your audience effectively.
              Produce high-quality fashion photography to showcase your garments
              in styled shoots, conveying the mood and narrative of your brand.
              Create dynamic video content, including fashion films and
              behind-the-scenes footage, to engage your audience and bring your
              brand story to life.
            </p>

            <p>
              <strong>Marketing Collateral:</strong> Design brochures and
              lookbooks to showcase your fashion collections and communicate
              your brand story effectively. Create attractive print
              advertisements for fashion magazines and publications to increase
              brand visibility and drive traffic to your website or stores.
              Develop promotional materials for fashion events and runway shows,
              including invitations, programs, and signage, to create a cohesive
              brand experience.
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

export default Fashion
