import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/carousel.module.css"

const retailSlides = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
          // partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      }
    
      return (
        <div>
          <Carousel
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="500ms"
            containerClass={Style.carouselContainer}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
          >
            {/* {nodes.map((image) => (
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt=""
                className={Style.item}
                key={image.id}
              />
            ))} */}
            <StaticImage src="../assets/images/carousel-images/retail/retail1.jpg" alt="" className={Style.item}/>
            <StaticImage src="../assets/images/carousel-images/retail/retail2.jpg" alt="" className={Style.item}/>
            <StaticImage src="../assets/images/carousel-images/retail/retail3.jpg" alt="" className={Style.item}/>
            <StaticImage src="../assets/images/carousel-images/retail/retail4.jpg" alt="" className={Style.item}/>
            <StaticImage src="../assets/images/carousel-images/retail/retail5.jpg" alt="" className={Style.item}/>
            <StaticImage src="../assets/images/carousel-images/retail/retail6.jpg" alt="" className={Style.item}/>
          </Carousel>
        </div>
      )
}

export default retailSlides