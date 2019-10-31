import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  );
};

export default Layout;
