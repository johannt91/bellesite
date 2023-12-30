import React from "react"
// import Layout from "./Layout"
import { StaticImage } from "gatsby-plugin-image"
import * as Style from "../assets/styles/portfolio.module.css"

const Portfolio = () => {
  return (
    // TOP HALF OF PORTFOLIO
    <section id="portfolio" className={Style.portfolio}>
      <div className={Style.portfolio_container}>
        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
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
          </a>
        </div>

        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
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
          </a>
        </div>

        <div
          className={`${Style.portfolio_item_container} ${Style.portfolio_grid_item_first}`}
        >
          <a href="/portfolio" className={Style.portfolio_item}>
            <StaticImage
              src="../assets/images/gallery/fashion.jpg"
              alt="technology"
              className={Style.img_responsive}
            />
            <div className={Style.portfolio_item_hover}>
              <div className="clearfix">
                <div className={Style.item_info}>
                  <span>FASHION</span>
                  <em>Featured Brand</em>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
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
          </a>
        </div>

        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
            <StaticImage
              src="../assets/images/img5.jpg"
              alt="technology"
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
          </a>
        </div>
      </div>

      {/* BOTTOM HALF OF PORTFOLIO */}
      <div className={Style.portfolio_container}>
        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
            <StaticImage
              src="../assets/images/img4.jpg"
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
          </a>
        </div>

        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
            <StaticImage
              src="../assets/images/gallery/food.jpg"
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
          </a>
        </div>

        <div
          className={`${Style.portfolio_item_container} ${Style.portfolio_grid_item_second}`}
        >
          <a href="/portfolio" className={Style.portfolio_item}>
            <StaticImage
              src="../assets/images/gallery/skincare1.jpg"
              alt="skin care"
              className={Style.img_responsive}
            />
            <div className={Style.portfolio_item_hover}>
              <div className="clearfix">
                <div className={Style.item_info}>
                  <span>SKIN CARE</span>
                  <em>Featured Brand</em>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
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
          </a>
        </div>

        <div className={Style.portfolio_item_container}>
          <a href="/portfolio" className={Style.portfolio_item}>
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
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
