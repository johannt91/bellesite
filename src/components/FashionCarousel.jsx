import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/carousel.module.css"


const FashionSlides = ({ title }) => {

  
    // const data = useStaticQuery(fashionImages)
    // const nodes = data.allFile.nodes
  
    // console.log(nodes)

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

        <StaticImage src="../assets/images/carousel-images/fashion/fashion1.png" alt=""/>
        <StaticImage src="../assets/images/carousel-images/fashion/fashion2.png" alt=""/>
        <StaticImage src="../assets/images/carousel-images/fashion/fashion3.png" alt=""/>
        <StaticImage src="../assets/images/carousel-images/fashion/fashion4.png" alt=""/>
        <StaticImage src="../assets/images/carousel-images/fashion/fashion5.png" alt=""/>
      </Carousel>
    </div>
  )
}

export default FashionSlides

// export const fashionImages = graphql`
//   query {
//     allFile(
//       filter: {
//         absolutePath: { regex: "/src/assets/images/carousel-images/fashion/" }
//       }
//     ) {
//       nodes {
//         name
//         childImageSharp {
//           gatsbyImageData(height: 575)
//         }
//       }
//     }
//   }
// `