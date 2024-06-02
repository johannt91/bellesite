import React from "react"
import Layout from "../components/Layout"
import PhotoSlides from "../components/PhotoCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const Photography = ({ location }) => {
  // const title = location.state && location.state.galleryTitle

  return (
    <Layout>
      <section>
        <PhotoSlides title={"Product Photography"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Product Photography</h2>
          <div className={Style.description}>
            <p>
              We collaborate with a small network of photographers to bring your
              products to life. Our product photography services are designed to
              showcase your items in the best possible light, highlighting their
              features and details with precision and artistry. Whether for
              e-commerce, marketing materials, or print catalogs, our expert
              photographers use state-of-the-art equipment and creative
              techniques to produce images that captivate and convert.
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

export default Photography
