import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/global.css"
import * as Main from "../assets/styles/main.module.css"

export default function Home() {
  return (
    <>
    <Layout>
    <section className={Main.hero}>
      <div className={Main.words}>
        <span>
          <strong>coding</strong>
        </span>
        <span>
          <strong>design</strong>
        </span>
        <span>
          <strong>digital</strong>
        </span>
        <span>
            <strong>graphic</strong>
        </span>
      </div>
      <h5 className={Main.subtext}>build your brand portfolio with us.</h5>

      <a href="#portfolio" className={Main.mouse}>
          <div className={Main.scroll}></div>
      </a>
    </section>

    <section id="portfolio" className={Main.portfolio}>
        <div className={Main.portfolio_container}>
            <div className={Main.portfolio_item_container} >
                <a href="single-project.html" className={Main.portfolio_item}>
                    <StaticImage src="../assets/images/img4.jpg" alt="technology" className={Main.img_responsive} />
                    <div className={Main.portfolio_item_hover}>
                        <div className="clearfix">
                            <div className={Main.item_info}>
                                <span>Mockups in seconds</span>
                                <em>Fashion / Logo</em>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className={Main.portfolio_item_container}>
                <a href="single-project.html" className={Main.portfolio_item}>
                    <StaticImage src="../assets/images/img2.jpg" alt="technology" className={Main.img_responsive} />
                    <div className={Main.portfolio_item_hover}>
                        <div className="clearfix">
                            <div className={Main.item_info}>
                                <span>Floating mockups</span>
                                <em>Ads / Graphics</em>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className={`${Main.portfolio_item_container} ${Main.portfolio_grid_item}`}>
                <a href="single-project.html" className={Main.portfolio_item}>
                    <StaticImage src="../assets/images/img3.jpg" alt="technology" className={Main.img_responsive} />
                    <div className={Main.portfolio_item_hover}>
                        <div className="clearfix">
                            <div className={Main.item_info}>
                                <span>Photorealistic smartwatch</span>
                                <em>Photography</em>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className={Main.portfolio_item_container}>
                <a href="single-project.html" className={Main.portfolio_item}>
                    <StaticImage src="../assets/images/img1.jpg" alt="technology" className={Main.img_responsive} />
                    <div className={Main.portfolio_item_hover}>
                        <div className="clearfix">
                            <div className={Main.item_info}>
                                <span>Held by hands</span>
                                <em>Fashion / Ads</em>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className={Main.portfolio_item_container}>
                <a href="single-project.html" className={Main.portfolio_item}>
                    <StaticImage src="../assets/images/img5.jpg" alt="technology" className={Main.img_responsive} />
                    <div className={Main.portfolio_item_hover}>
                        <div className="clearfix">
                            <div className={Main.item_info}>
                                <span>Mobile devices</span>
                                <em>Graphics / Ads</em>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section className={Main.services}>
      <h1 className={Main.services_title}>Our Services</h1>
      <p className={Main.services_subtext}>We provide the following services</p>
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
    </Layout>
  </>
  )
}
