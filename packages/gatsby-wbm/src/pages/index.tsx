import React from 'react';
import { graphql } from 'gatsby';
import queryString from 'query-string';
import Layout from '../components/layout';
import PersonalBlog from '../containers/home';
import SEO from '../components/seo';
import MailingListModal from '../components/mailing-list-modal/mailing-list-modal';

const HomePage = (props: any) => {
  const { data } = props;
  const query = queryString.parse(props.location.search)

  return (
    <Layout>
      <SEO
        title="Home"
        description={data.site.siteMetadata.description}
      />
      <PersonalBlog />
      <MailingListModal query={query}/>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
