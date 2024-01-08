import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/carousel.module.css"

const Slides = ({title}) => {
    const imgPath = "../assets/images/carousel-images/food"

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }


  return (

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
      itemClass={Style.imgItem}
    >

      {/* <StaticImage src="../assets/images/digital1.jpg" alt="" className={Style.item} /> */}
      <StaticImage src={`${imgPath}/food1.png`} alt="" className={Style.item} />
      <StaticImage src={`${imgPath}/food2.png`} alt="" className={Style.item} />
      <StaticImage src={`${imgPath}/food3.png`} alt="" className={Style.item} />
      <StaticImage src={`${imgPath}/food4.png`} alt="" className={Style.item} />

    </Carousel>
  )
}

export default Slides
