import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// import { GatsbyImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/carousel.module.css"


const FoodSlides = ({ title }) => {

  
    // const data = useStaticQuery(foodImages)
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

<       StaticImage src="../assets/images/carousel-images/food/food1.png" alt="" className={Style.item}/>
<       StaticImage src="../assets/images/carousel-images/food/food2.png" alt="" className={Style.item}/>
<       StaticImage src="../assets/images/carousel-images/food/food3.png" alt="" className={Style.item}/>
<       StaticImage src="../assets/images/carousel-images/food/food4.png" alt="" className={Style.item}/>
<       StaticImage src="../assets/images/carousel-images/food/food5.png" alt="" className={Style.item}/>
      </Carousel>
    </div>
  )
}

export default FoodSlides

// export const foodImages = graphql`
//   query {
//     allFile(
//       filter: {
//         absolutePath: { regex: "/src/assets/images/carousel-images/food/" }
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