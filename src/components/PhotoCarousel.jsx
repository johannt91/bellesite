import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/carousel.module.css"


const PhotoSlides = ({ title }) => {

  
    // const data = useStaticQuery(query)
    // const nodes = data.allFile.nodes
  
    // console.log(nodes)

    // nodes.map((image) => 
    //   console.log(image)
    // )


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

        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-01.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-03.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-04.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-05.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-06.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-09.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-10.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-11.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-12.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-13.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-14.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-15.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/photography/PHOTOGRAPHY SLIDES-16.png" alt="" className={Style.item}/>

      </Carousel>
    </div>
  )
}

export default PhotoSlides

// export const query = graphql`
//   query {
//     allFile(
//       filter: {
//         absolutePath: { regex: "/src/assets/images/carousel-images/photography/" }
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