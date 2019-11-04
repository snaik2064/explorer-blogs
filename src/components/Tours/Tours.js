import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import TourList from './TousList';

const getTours = graphql`
  query {
    tours: allContentfulTours {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Tours = () => {
  const { tours } = useStaticQuery(getTours);

  return <TourList tours={tours} />;
};

export default Tours;
