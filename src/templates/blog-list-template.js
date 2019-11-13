import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/blog.module.css';
import Title from '../components/Title';
import BlogCard from '../components/Blog/BlogCard';

const Blog = props => {
  const { data } = props;
  const { currentPage, numPages } = props.pageContext;

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />;
          })}
        </div>
        <section className={styles.links}>
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                fade
                key={i}
                to={`/blogs/${i === 0 ? '' : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            );
          })}
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default Blog;
