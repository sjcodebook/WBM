import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Privacy from '../containers/privacy-policy'

type PrivacyPageProps = {}

const PrivacyPage: React.FunctionComponent<PrivacyPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy For Webbrainsmedia"
      />

      <Privacy />
    </Layout>
  )
}

export default PrivacyPage
