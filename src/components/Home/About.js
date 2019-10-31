import React from 'react';

import Title from '../Title';
import styels from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {
  return (
    <section className={styels.about}>
      <Title title="about" subtitle="us" />
      <div className={styels.aboutCenter}>
        <article className={styels.aboutImg}>
          <div className={styels.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styels.aboutInfo}>
          <h4>explore the difference</h4>
        </article>
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
      </div>
    </section>
  );
};

export default About;
