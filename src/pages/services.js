import React from "react"
import Layout from "../components/Layout"
import * as Styles from "../assets/styles/services.module.css"
import { Link } from "gatsby"

const services = () => {
  return (
    <Layout>
      <section className={Styles.servicesContainer}>
        {/* SERVICE 1 */}

        <h1>SERVICES</h1>

        <div>
          <h2>BUSINESS IMAGE DESIGN</h2>
          <p className={Styles.serviceDescription}>
            “Create Your Brand Identity” - Clear communication and collaboration
            are key to developing a strong and effective business identity.
            Create a memorable and consistent visual representation of your
            business across various platforms. To develop a complete brand
            identity, we deliver the following design services:
          </p>

          <ul className={Styles.serviceList}>
            <li>Logo Design</li>
            <li>Typeface</li>
            <li>Colour Palette</li>
            <li>Stationery Design</li>
            <li>Print Materials</li>
            <li>Website Design</li>
            <li>Social Media Graphics</li>
            <li>Packaging Design</li>
            <li>Marketing Collateral</li>
            <li>Brand Guidelines Manual</li>
          </ul>

          <Link to="/quote" className={Styles.serviceQuote}>
            Request a quote
          </Link>
        </div>

        {/* SERVICE 2 */}

        <div>
          <h2>SIGNAGE &amp; RETAIL BRANDING</h2>
          <p className={Styles.serviceDescription}>
            Crucial components of creating a strong and memorable visual
            presence for businesses in physical spaces. These services focus on
            designing and working with trusted sign companies to produce and
            implement various visual elements within businesses and retail
            spaces. Our design and coordination services for signage and retail
            branding:
          </p>

          <ul className={Styles.serviceList}>
            <li>Storefront Signage</li>
            <li>Interior Signage</li>
            <li>Window Graphics</li>
            <li>In-Store Branding</li>
            <li>Digital Signage</li>
            <li>Fixture and Display Design</li>
            <li>Promotional Banners and Posters</li>
            <li>Vehicle Branding</li>
          </ul>

          <Link to="/quote" className={Styles.serviceQuote}>
            Request a quote
          </Link>
        </div>

        {/* SERVICE 3 */}

        <div>
          <h2>CREATIVE COORDINATION</h2>
          <p className={Styles.serviceDescription}>
            Our in person or virtual creative coordination services begin with
            client collaborative brainstorming sessions followed by planning,
            design & scheduling services. For our Social Media clients, we offer
            virtual monthly calendar planning which include themes for creating
            content, monthly sessions for capturing and creating content as well
            as mailchimp newsletter services. We also work with a select group
            of creative and media service providers to deliver to our clients’
            needs. For creative coordination services Email:
            bellesvirtual@gmail.com{" "}
            {/* Refactor to allow copy to clipboard. Alternatively, allow redirect to user selected mail service*/}
          </p>

          <Link to="/quote" className={Styles.serviceQuote}>
            Request a quote
          </Link>
        </div>

        {/* SERVICE 4 */}

        <div>
          <h2>PRODUCT PHOTOGRAPHY</h2>
          <p className={Styles.serviceDescription}>
            Our photography services are shared with our preferred provider
            'Candid Captures'. In-house, we capture high-quality images of
            products for use in marketing, advertising, e-commerce, and other
            promotional materials. For clients who require photography of staged
            sets, models or event coverage to promote their brands we work with
            Candid Captures to produce high resolution, quality images. Our
            product photography services include:
          </p>

          <ul className={Styles.serviceList}>
            <li>Photography Planning</li>
            <li>Professional Photography Equipment</li>
            <li>Styling and Composition</li>
            <li>Studio or On-location Shoots</li>
            <li>E-commerce Photography</li>
            <li>Image Editing and Retouching</li>
            <li>Lifestyle Photography</li>
            <li>High-Resolution Image Delivery</li>
          </ul>

          <Link to="/quote" className={Styles.serviceQuote}>
            Request a quote
          </Link>
        </div>

        {/* SERVICE 5 */}

        <div>
          <h2>WEBSITE DESIGN</h2>
          <p className={Styles.serviceDescription}>
            Custom websites designed and built to showcase your brand and meet
            your business needs. From conceptualization to deployment, we handle
            every aspect of the development process with attention to detail and
            dedication.
          </p>

          <Link to="/quote" className={Styles.serviceQuote}>
            Request a quote
          </Link>
        </div>

        {/* SERVICE 6 */}

        <div>
          <h2>CONTENT CREATIVE SESSIONS</h2>
          <p className={Styles.serviceDescription}>
            To showcase your brands on Social Media we schedule creative
            collaboration sessions to capture quality photographic and video
            content that is suitable and trending for these platforms. These
            sessions are conducted at the client's physical business space and
            is scheduled monthly according to your plan. The duration and number
            of sessions will also vary across each level of service. Be sure to
            discuss with us your needs and clarify the details of your creative
            content session before booking your plan as we are quite strict with
            the time management of this service.
          </p>

          <Link to="/quote" className={Styles.serviceQuote}>
            Request a quote
          </Link>
        </div>

        {/* SERVICE 7 */}

        <div>
          <h2>SOCIAL MEDIA MANAGEMENT &amp; CONTENT CREATION</h2>
          <p className={Styles.serviceDescription}>
            Select from the packages below to suit your needs and budget. Our
            social Media Management offers plans for both short term and long
            term commitments. Ad Campaigns & Social Media Boosting costs will be
            customised to client budget, calculated separately and then added to
            monthly billing.
          </p>

          {/* SERVICES TABLE */}
          <table>
            <tbody>
              <tr>
                <th className={Styles.tableHighlight}>PLAN DURATION</th>
                <th className={Styles.tableHighlight}>3 MONTHS</th>
                <th className={Styles.tableHighlight}>12 MONTHS</th>
                <th className={Styles.tableHighlight}>12 MONTHS</th>
              </tr>
              <tr>
                <td className={Styles.tableHighlight}>CONTENT CREATION</td>
                <td>6 posts /month</td>
                <td>3 posts /wk.</td>
                <td>5 posts /wk.</td>
              </tr>
              <tr>
                <td>
                  WEEKLY STORIES
                  <br />
                  * CONTENT CREATION &amp;
                  <br />
                  PRODUCT PHOTOGRAPHY
                </td>
                <td>
                  &#9733;
                  <br />
                  &#9733;
                  <br />
                  &#9733;
                </td>
                <td>
                  &#9733;
                  <br />
                  &#9733;
                  <br />
                  &#9733;
                </td>
                <td>
                  &#9733;
                  <br />
                  &#9733;
                  <br />
                  &#9733;
                </td>
              </tr>
              <tr>
                <td>PAGE MANAGEMENT</td>
                <td>&#9733;</td>
                <td>&#9733;</td>
                <td>&#9733;</td>
              </tr>
              <tr>
                <td>
                  CAMPAIGN PLANNING
                  <br />
                  &#40;VIRTUAL MEETINGS&#41;
                </td>
                <td colSpan={3}>1 monthly</td>
              </tr>
              <tr>
                <td>QUARTERLY ANALYTICS</td>
                <td>-</td>
                <td>&#9733;</td>
                <td>&#9733;</td>
              </tr>
              <tr>
                <td>CUSTOMER RESPONSE</td>
                <td>-</td>
                <td>-</td>
                <td>&#9733;</td>
              </tr>
              <tr>
                <td>BOOSTED CAMPAIGN DESIGN</td>
                <td>&#9733;</td>
                <td>&#9733;</td>
                <td>&#9733;</td>
              </tr>
              <tr>
                <td>
                  PRODUCT PHOTOGRAPHY &amp; <br />
                  CONTENT CREATION
                </td>
                <td>$500</td>
                <td>$700</td>
                <td>$700</td>
              </tr>
              <tr>
                <td>PRICE</td>
                <td>$1000</td>
                <td>$2000</td>
                <td>$2350</td>
              </tr>
              <tr>
                <td>INVESTMENT</td>
                <td>$1500</td>
                <td>$2700</td>
                <td>$3050</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <th colSpan={2} className={Styles.tableHighlight}>
                ADD-ONS/PRICE PER UNIT
              </th>
              <tr>
                <td>SINGLE AD/POST DESIGN</td>
                <td>$225</td>
              </tr>
              <tr>
                <td>30 SEC VIDEO-ANIMA</td>
                <td>$375</td>
              </tr>
              <tr>
                <td>PRODUCT PHOTOGRAPHY</td>
                <td>$500 /HR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
}

export default services
