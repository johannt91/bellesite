import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/about.module.css"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <section className={Style.container}>
        <StaticImage
          src="../assets/images/bellesartz.svg"
          alt="Belles Artz business logo"
          className={Style.logo}
        />
        <div className={Style.about}>
          <h1 className={Style.heading}>Our Story</h1>
          <p className={Style.description}>
            Bold ideas and brilliant designs tell a great story! Since 2016, we
            have established ourselves as the studio that builds stronger brands
            for our clients. Explore our services in graphics, illustration,
            retail design and creative content for distribution across printed
            and digital mediums. In 2022, we expanded our services to offer web
            development and coding. Designing for private, corporate and
            entrepreneurial clients has rewarded us with deeper brand knowledge
            and creative diversity - our process combines fun, unique concepts
            and the passion for success!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default about
