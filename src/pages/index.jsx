import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/global.css"
import * as Main from "../assets/styles/main.module.css"
import * as Style from "../assets/styles/portfolio.module.css"
import jewelryGif from "../assets/images/jewelry.gif"
import { Link } from "gatsby"
import Typewriter from "typewriter-effect"

export default function Home() {

  return (
    <Layout>
      <section className={Main.hero}>
        <div className={Main.hero_cta}>
          <div>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={typewriter => {
                typewriter
                  .typeString("<strong>WEB<span>.</span></strong>")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("<strong>GRAPHIC DESIGN<span>.</span></strong>")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("<strong>DIGITAL<span>.</span></strong>")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(
                    "<strong>PRODUCT PHOTOGRAPHY<span>.</span></strong>"
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
              }}
            />
          </div>
          <h5 className={Main.subtext}>
            BOLD IDEAS AND BRILLIANT DESIGNS TELL A GREAT STORY
          </h5>
        </div>

        <a href="#portfolio" className={Main.mouse}>
          <div className={Main.scroll}></div>
        </a>
      </section>

      {/* TOP HALF OF PORTFOLIO */}

      <main id="portfolio" className={Style.portfolio}>
      <h5 className={Style.portfolio_heading}>
            Brilliant ideas tell a great story.
      </h5>
        <div className={Style.portfolio_container}>
          <div className={`${Style.portfolio_item_container} ${Style.grid_item1}`}>
            <Link
              to="/food"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Bakery" }}
            >
              <StaticImage
                src="../assets/images/gallery/food.jpg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay1}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Bakery</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`${Style.portfolio_item_container} ${Style.grid_item2}`}
          >
            <Link
              to="/prodLabels"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Product Labels" }}
            >
              <StaticImage
                src="../assets/images/prod_labels.jpeg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay2}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Product Labels</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${Style.portfolio_item_container} ${Style.grid_item3}`}>
            <Link
              to="/photography"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Product Photography" }}
            >
              <StaticImage
                src="../assets/images/prod_photo.jpeg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay3}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Product Photography</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${Style.portfolio_item_container} ${Style.grid_item4}`}>
            <Link
              to="/fashion"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Fashion" }}
            >
              <StaticImage
                src="../assets/images/gallery/fashion.jpeg"
                alt="cup noodles"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay2}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Fashion</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* BOTTOM HALF OF PORTFOLIO */}
        <div className={Style.portfolio_container}>
          <div className={`${Style.portfolio_item_container} ${Style.grid_item5}`}>
            <Link
              to="/skincare"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Skin Care" }}
            >
              <StaticImage
                src="../assets/images/skin_care.jpeg"
                alt="green tins of cow milk brand butter ghee"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay2}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Skin Care</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${Style.portfolio_item_container} ${Style.grid_item6}`}>
            <Link
              to="/creativeContent"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Creative Content" }}
            >
              <img
                src={jewelryGif}
                alt="macarons"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay2}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Creative Content</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`${Style.portfolio_item_container} ${Style.grid_item7}`}
          >
            <Link
              to="/corporate"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Corporate Identity" }}
            >
              <StaticImage
                src="../assets/images/gallery/ebene.jpg"
                alt="ebene logo"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay3}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Corporate Identity</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${Style.portfolio_item_container} ${Style.grid_item8}`}>
            <Link
              to="/retail"
              className={Style.portfolio_item}
              state={{ galleryTitle: "Retail Branding & Design" }}
            >
              <StaticImage
                src="../assets/images/gallery/retail.jpg"
                alt="retail graphic"
                className={Style.img_responsive}
              />
              <div className={`${Style.portfolio_item_hover} ${Style.portfolio_item_overlay1}`}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>Retail Branding &amp; Design</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </main>

      {/* ENABLE SMOOTH SCROLLING TO HERE */}
      {/* <section className={Main.teams}>
        <h2 className={Main.section_title} id="team">
          Meet the Team
        </h2>
        <ul className={Main.team_list}>
          <li className={Main.team}>
            <StaticImage
              src="../assets/images/web.jpg"
              alt="technology"
              className={Main.team_image}
            />
            <p className={Main.team_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
          <li className={Main.team}>
            <StaticImage
              src="../assets/images/digital1.jpg"
              alt="technology"
              className={Main.team_image}
            />
            <p className={Main.team_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
          <li className={Main.team}>
            <StaticImage
              src="../assets/images/camera.jpg"
              alt="technology"
              className={Main.team_image}
            />
            <p className={Main.team_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
          <li className={Main.team}>
            <StaticImage
              src="../assets/images/graphic.jpg"
              alt="technology"
              className={Main.team_image}
            />
            <p className={Main.team_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
        </ul>
      </section> */}

      {/* <section className={Main.quote_container}>
        <h2 className={Main.section_title}>Get a Quote</h2>
      </section> */}
    </Layout>
  )
}
