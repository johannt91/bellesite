import React from "react"
import Layout from "../components/Layout"
import Slides from "../components/FashionCarousel"
import * as Style from "../assets/styles/gallery.module.css"

const Fashion = ({ location }) => {
  // const title = location.state && location.state.galleryTitle



  return (
    <Layout>
      <section>
        <Slides title={"Fashion"} />
        <div className={Style.container}>
          <h2 className={Style.heading}>Fashion</h2>
          <h3 className={Style.subheading}>Subheading</h3>
          <div className={Style.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter
              enim nosmet ipsos nosse non possumus. Inscite autem medicinae et
              gubernationis ultimum cum ultimo sapientiae comparatur. Tecum
              optime, deinde etiam cum mediocri amico. Et nemo nimium beatus
              est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata
              virtus voluptatis aditus ultimum cum ultimo sapientiae Et nemo
              nimium beatus est
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter
              enim nosmet ipsos nosse non possumus. Inscite autem medicinae et
              gubernationis ultimum cum ultimo sapientiae comparatur. Tecum
              optime, deinde etiam cum mediocri amico. Et nemo nimium beatus
              est; Ac ne plura complectar-sunt enim innumerabilia
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Fashion
