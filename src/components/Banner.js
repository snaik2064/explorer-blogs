import React from 'react';

import styels from '../css/banner.module.css';

const Banner = ({ title, info, children }) => {
  return (
    <div className={styels.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  );
};

export default Banner;
