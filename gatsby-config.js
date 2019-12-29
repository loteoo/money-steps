module.exports = {
  siteMetadata: {
    title: 'Personal Finance Checklist',
    description: 'Sound personal finance advice everyone should follow',
    author: 'loteoo',
    siteUrl: 'https://money-steps.netlify.com',
    language: 'en'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/App/index.jsx')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/steps`,
        name: 'steps'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-transformer-remark'
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/icon-512x512.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-nested'),
          require('postcss-preset-env')
        ]
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      // Fight me (ง'̀-'́)ง ! I need to know the interest in the project.
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-73430538-5'
      }
    }
    // Enable Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
