import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/styles/global.css"
import * as Main from "../assets/styles/main.module.css"
import * as Style from "../assets/styles/portfolio.module.css"
import { Link } from "gatsby"
import Typewriter from "typewriter-effect"

export default function Home() {
  const web = "Web Design"
  const food = "Food"
  const fashion = "Fashion"
  const photo = "Product Photography"
  const digital = "Digital Content"
  const label = "Product Labels"
  const logo = "Logo Design"
  const skincare = "Skin Care"
  const retail = "Retail"
  const signage = "Signage and Displays"

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
        <div className={Style.portfolio_container}>
          <div className={Style.portfolio_item_container}>
            <Link
              to="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: web }}
            >
              <StaticImage
                src="../assets/images/img4.jpg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>WEB DESIGN</span>
                    <em>Coding / Copywriting</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={Style.portfolio_item_container}>
            <Link
              to="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: food }}
            >
              <StaticImage
                src="../assets/images/gallery/food.jpg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>FOOD</span>
                    <em>Branding / Advertising</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`${Style.portfolio_item_container} ${Style.portfolio_grid_item_first}`}
          >
            <Link
              to="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: fashion }}
            >
              <StaticImage
                src="../assets/images/gallery/fashion.jpg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>FASHION</span>
                    <em>Featured Project</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={Style.portfolio_item_container}>
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: photo }}
            >
              <StaticImage
                src="../assets/images/gallery/product.jpg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>PRODUCT PHOTOGRAPHY</span>
                    <em>Styling / White Box</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={Style.portfolio_item_container}>
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: digital }}
            >
              <StaticImage
                src="../assets/images/gallery/noodle.jpg"
                alt="cup noodles"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>DIGITAL CONTENT</span>
                    <em>Graphics / Ads</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* BOTTOM HALF OF PORTFOLIO */}
        <div className={Style.portfolio_container}>
          <div className={Style.portfolio_item_container}>
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: label }}
            >
              <StaticImage
                src="../assets/images/gallery/prodlabel.jpg"
                alt="green tins of cow milk brand butter ghee"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>PRODUCT LABELS</span>
                    <em>Labels for your products</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={Style.portfolio_item_container}>
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: logo }}
            >
              <StaticImage
                src="../assets/images/gallery/ebene.jpg"
                alt="macarons"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>LOGO DESIGN</span>
                    <em>Brand Identity &amp; Guidance</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`${Style.portfolio_item_container} ${Style.portfolio_grid_item_second}`}
          >
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: skincare }}
            >
              <StaticImage
                src="../assets/images/gallery/skincare1.jpg"
                alt="skin care"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>SKIN CARE</span>
                    <em>Featured Project</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={Style.portfolio_item_container}>
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: retail }}
            >
              <StaticImage
                src="../assets/images/gallery/retail.jpg"
                alt="retail graphic"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>RETAIL</span>
                    <em>Retail</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={Style.portfolio_item_container}>
            <Link
              href="/projects"
              className={Style.portfolio_item}
              state={{ galleryTitle: signage }}
            >
              <StaticImage
                src="../assets/images/gallery/signage.jpg"
                alt="technology"
                className={Style.img_responsive}
              />
              <div className={Style.portfolio_item_hover}>
                <div className="clearfix">
                  <div className={Style.item_info}>
                    <span>SIGNAGE &amp; DISPLAYS</span>
                    <em>External &amp; Internal Signage</em>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* ENABLE SMOOTH SCROLLING TO HERE */}
      <section className={Main.services}>
        <h2 className={Main.section_title} id="team">
          Meet the Team
        </h2>
        <ul className={Main.services_list}>
          <li className={Main.service}>
            <StaticImage
              src="../assets/images/web.jpg"
              alt="technology"
              className={Main.service_image}
            />
            <p className={Main.service_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
          <li className={Main.service}>
            <StaticImage
              src="../assets/images/digital1.jpg"
              alt="technology"
              className={Main.service_image}
            />
            <p className={Main.service_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
          <li className={Main.service}>
            <StaticImage
              src="../assets/images/camera.jpg"
              alt="technology"
              className={Main.service_image}
            />
            <p className={Main.service_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
          <li className={Main.service}>
            <StaticImage
              src="../assets/images/graphic.jpg"
              alt="technology"
              className={Main.service_image}
            />
            <p className={Main.service_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec viverra augue. Suspendisse feugiat est eget nunc mollis
              interdum. Proin.
            </p>
          </li>
        </ul>
      </section>

      <section className={Main.quote_container}>
        <h2 className={Main.section_title}>Get a Quote</h2>
      </section>
    </Layout>
  )
}
