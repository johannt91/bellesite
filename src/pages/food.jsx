import React from "react"
import Layout from "../components/Layout"
import FoodSlides from "../components/FoodCarousel"
import * as Style from "../assets/styles/gallery.module.css"
import { Link } from "gatsby"

const Food = ({ location }) => {
  // const title = location.state && location.state.galleryTitle

  return (
    <Layout>
      <section>
        <FoodSlides title={"Food"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Bakery</h2>
          <div className={Style.description}>
            <p>
              At BellesArtz, we understand that a bakery's success is as much
              about presentation as it is about taste. Our specialized visual
              and design services are crafted to help bakeries create a warm,
              inviting, and irresistible brand presence. Here is just a few of
              what we can do:
            </p>

            <p>
              <strong>Menu Design:</strong> Beautifully designed menus that are
              easy to read and showcase your products in an appetizing way.
              Interactive digital menus for your website and social media,
              ensuring a seamless customer experience online.
            </p>

            <p>
              <strong>Signage and Interior Graphics:</strong> Eye-catching
              exterior signs that draw customers in and reflect your bakery's
              brand. Custom wall art, window decals, and point-of-purchase
              displays that create a welcoming and engaging atmosphere.
            </p>

            <p>
              <strong>Social Media Graphics:</strong> Consistent and creative
              graphics and content for all your social media platforms to engage
              your audience and promote your products. Custom graphics for
              special promotions, holidays, and events to maximize your reach
              and impact.
            </p>

            <p>
              <strong>Photography Services:</strong> High-quality images of your
              baked goods that highlight their delicious details and entice
              customers. Captivating photos of your bakery's interior, staff,
              and customers to create a connection with your audience.
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

export default Food
