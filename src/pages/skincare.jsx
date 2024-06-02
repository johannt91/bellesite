import React from "react"
import Layout from "../components/Layout"
import SkinCareSlides from "../components/SkincareCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const Skincare = ({ location }) => {
  // const title = location.state && location.state.galleryTitle

  return (
    <Layout>
      <section>
        <SkinCareSlides title={"Skin Care"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Skin Care</h2>
          <div className={Style.description}>
            <p>
              Partner with us to elevate your skincare brand's visual identity
              and stand out in the competitive beauty industry. With our
              tailored design solutions, you can create a lasting impression and
              build a loyal customer base for your skincare brand. Some of our
              services include:
            </p>
            <p>
              <strong>Packaging Photography:</strong> Capture professional
              images of your skincare products for use in marketing materials,
              packaging, and e-commerce platforms. Showcase your skincare
              products in real-life settings to evoke emotions and connect with
              your target audience on a personal level.
            </p>

            <p>
              <strong>Retail Environment Design:</strong> Design visually
              appealing displays and signage for retail stores that attract
              attention and encourage customers to explore your skincare
              products. Create immersive and Instagram-worthy pop-up shop
              experiences that generate buzz and drive foot traffic to your
              brand.
            </p>

            <p>
              <strong>Social Media Content:</strong> Design visually stunning
              graphics for your social media platforms that align with your
              brand's aesthetic and engage your audience. Capture high-quality
              images of your skincare products for use in social media posts,
              showcasing their textures, colors, and packaging design.
            </p>

            <p>
              <strong>Packaging Design:</strong> Design visually appealing
              packaging that enhances the perceived value of your skincare
              products and stands out on the shelf. Create custom labels that
              communicate product benefits clearly and attractively, adhering to
              regulatory requirements. Elevate your premium skincare line with
              luxurious and elegant packaging design that exudes sophistication
              and quality.
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

export default Skincare
