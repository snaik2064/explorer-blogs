import React, { Component } from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Tours from '../components/Tours/Tours';
import SEO from '../components/SEO';

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Tours" />
        <StyledHero
          home="true"
          img={this.props.data.defaultBcg.childImageSharp.fluid}
        />
        <Tours />
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
