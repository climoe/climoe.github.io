module.exports = {
  siteMetadata: {
    title: 'Kamil Klimczak - CV Portfolio'
  },
  flags: {
    FAST_REFRESH: false,
    FAST_DEV: true
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { 
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }  
      }  
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-portfolio-cv',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#f6f1ed',
        theme_color: '#f6f1ed',
        display: 'minimal-ui',
        icon: 'src/static/images/icons/social.JPG'
      }
    }
  ]
};
