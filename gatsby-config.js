/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  pathPrefix: "/bellesite",
  plugins: [`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`, //A Gatsby plugin for sourcing data into your Gatsby application from your local filesystem
      options: {
        // The unique name for each instance
        name: `data`,
        // Path to the directory
        path: `${__dirname}/src/assets/images/carousel-images`,
      },
    },
  ],
  
}