import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/global.css"
import * as Main from "../assets/styles/main.module.css"
import Typewriter from 'typewriter-effect'
import Portfolio from "../components/Portfolio"

export default function Home() {
  return (
    <Layout>
        <section className={Main.hero}>
            <div className={Main.hero_cta}>
                <Typewriter
                options={{
                    loop: true
                }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<strong>CODING<span>.</span></strong>')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('<strong>DESIGN<span>.</span></strong>')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('<strong>DIGITAL<span>.</span></strong>')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('<strong>GRAPHIC<span>.</span></strong>')
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                    }}
                />
                <h5 className={Main.subtext}>BOLD IDEAS AND BRILLIANT DESIGNS TELL A GREAT  STORY</h5>
            </div>

            <a href="#portfolio" className={Main.mouse}>
                <div className={Main.scroll}></div>
            </a>
        </section>

    <Portfolio/>

    <section className={Main.services}>
      <h2 className={Main.section_title}>Meet the Team</h2>
      <ul className={Main.services_list}>
        <li className={Main.service}>
          <StaticImage src="../assets/images/web.jpg" alt="technology" className={Main.service_image} />
          <p className={Main.service_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec viverra augue. Suspendisse feugiat est eget nunc mollis interdum. Proin.</p>
        </li>
        <li className={Main.service}>
          <StaticImage src="../assets/images/digital1.jpg" alt="technology" className={Main.service_image} />
          <p className={Main.service_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec viverra augue. Suspendisse feugiat est eget nunc mollis interdum. Proin.</p>
        </li>
        <li className={Main.service}>
          <StaticImage src="../assets/images/camera.jpg" alt="technology" className={Main.service_image} />
          <p className={Main.service_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec viverra augue. Suspendisse feugiat est eget nunc mollis interdum. Proin.</p>
        </li>
        <li className={Main.service}>
          <StaticImage src="../assets/images/graphic.jpg" alt="technology" className={Main.service_image} />
          <p className={Main.service_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec viverra augue. Suspendisse feugiat est eget nunc mollis interdum. Proin.</p>
        </li>
      </ul>
    </section>

    <section className={Main.quote_container}>
        <h2 className={Main.section_title}>Get a Quote</h2>          
    </section>
    </Layout>
  )
}
