import React from 'react';

import Title from '../Title';
import styels from '../../css/services.module.css';
import services from '../../constants/services';

const Services = () => {
  return (
    <section className={styels.services}>
      <Title title="our" subtitle="services" />
      <div className={styels.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styels.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
