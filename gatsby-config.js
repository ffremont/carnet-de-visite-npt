module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `Carnet de visite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-less",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
