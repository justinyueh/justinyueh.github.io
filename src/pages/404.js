import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet defer={false}>
            <html lang="en" />
            <title>{siteTitle}</title>
            <meta name="Description" content="Justin Yueh's Blog." />
          </Helmet>
          <div className="wrapper">
            <div>Can&apos;t find the page.</div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query PageNotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
