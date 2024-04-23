import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/carousel.module.css"


const ProdSlides = ({ title }) => {

  
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
        <StaticImage src="../assets/images/carousel-images/prodLabels/label1.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label2.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label3.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label4.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label5.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label6.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label7.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label8.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label9.jpg" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label10.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label11.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label12.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label13.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label14.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label15.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label16.png" alt="" className={Style.item}/>
        <StaticImage src="../assets/images/carousel-images/prodLabels/label17.png" alt="" className={Style.item}/>
      </Carousel>
    </div>
  )
}

export default ProdSlides

// export const query = graphql`
//   query {
//     allFile(
//       filter: {
//         absolutePath: { regex: "/src/assets/images/carousel-images/prodLabels/" }
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