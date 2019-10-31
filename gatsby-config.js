module.exports = {
  siteMetadata: {
    title: 'Backroads',
    description:
      'Expolre worldwide tours & discver what makes each of them unique.Forget your daily routine & say yes to adventure',
    author: '@johndoe',
    data: {
      name: 'john',
      age: 24,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
