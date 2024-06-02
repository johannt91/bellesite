import React from "react"
import Layout from "../components/Layout"
import ProdSlides from "../components/ProdCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const ProdLabels = ({ location }) => {
  // const title = location.state && location.state.galleryTitle

  return (
    <Layout>
      <section>
        <ProdSlides title={"Product Labels"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Product Labels</h2>
          <div className={Style.description}>
            <p>
              We create eye-catching and professional product labels that
              capture the essence of your brand, stand out on the shelves and
              also communicate your product's unique value. Whether you need a
              minimalist aesthetic or a vibrant, intricate layout, we tailor
              each design to enhance your product's appeal. Leave a lasting
              impression and drive consumer interest with our custom designs!
            </p>
            <p>
              Need printing? Our dedicated print coordination services ensure
              your printed materials meet the highest standards from concept to
              final production. BellesArtz Ltd. manages every detail of the
              print process. We collaborate with trusted printing partners to
              guarantee quality, accuracy, and timely delivery. Our experts
              oversee the entire workflow, including proofing, color matching,
              and material selection, ensuring that your vision is flawlessly
              executed.
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

export default ProdLabels
