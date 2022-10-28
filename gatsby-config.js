module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `Carnet de visite`,
    siteUrl: `https://carnet-de-visite-numerique-pour-toutes.web.app`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-less",
    "gatsby-plugin-image",
    'gatsby-plugin-react-helmet',
    
    "gatsby-plugin-sharp",
    "gatsby-plugin-remove-serviceworker",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Numérique pour toutes - Carnet de visite",
        short_name: "NPT - Carnet de visite",
        start_url: "/",
        background_color: "#251e5b",
        theme_color: "#efefef",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name:'Patrick Hand SC',
            file:'https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap',
          },
          {
            name: `Fredoka One`,
            file: `https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
  ],
};
