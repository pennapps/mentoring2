module.exports = {
  siteMetadata: {
    title: `mentoring3`,
    siteUrl: `https://www.yourdomain.tld`,
    favicon: `/static/favicon.ico`
  },
  plugins: [
    "gatsby-plugin-mdx",
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
]
};