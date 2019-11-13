import React from 'react';

import { graphql } from 'gatsby';

import StyledHero from '../components/StyledHero';
import Layout from '../components/Layout';
import BlogList from '../components/Blog/BlogList';

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
};

export default blog;

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
