import React from 'react';

import Title from '../Title';
import styels from '../../css/about.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <section className={styels.about}>
      <Title title="about" subtitle="us" />
      <div className={styels.aboutCenter}>
        <article className={styels.aboutImg}>
          <div className={styels.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="ladscape" />
          </div>
        </article>
        <article className={styels.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo
            laudantium doloremque?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo
            laudantium doloremque?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
