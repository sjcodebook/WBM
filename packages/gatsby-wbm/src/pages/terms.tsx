import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Terms from '../containers/terms'

type TermsPageProps = {}

const TermsPage: React.FunctionComponent<TermsPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Terms Of Use"
        description="Terms And Conditions For Webbrainsmedia"
      />

      <Terms />
    </Layout>
  )
}

export default TermsPage
