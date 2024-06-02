import React from "react"
import Layout from "../components/Layout"
import CreativeContentSlides from "../components/CreativeContentCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const creativeContent = () => {
  return (
    <Layout>
      <section>
        <CreativeContentSlides title={"Creative Content"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Creative Content</h2>
          <div className={Style.description}>
            <p>
              Our digital content creation services for social media are
              designed to engage your audience and drive brand growth. Included
              are a combination of various styles of graphics, compelling
              videos, interactive stories and shareable posts. We craft content
              that resonates with your followers and reflects your brand's
              unique voice to boost your social media impact and connect with
              your audience on a deeper level.
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

export default creativeContent
