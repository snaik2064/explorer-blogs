import React, { Component } from 'react';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          home="true"
          img={this.props.data.defaultBcg.childImageSharp.fluid}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
