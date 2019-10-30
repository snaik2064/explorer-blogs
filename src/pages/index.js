import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue expoloring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus?"
      >
        <Link to="/tours" className="btn-white">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
);
