import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.blogBcg.childImageSharp.fluid} />
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
