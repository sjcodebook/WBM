import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Disclaimer from '../containers/disclaimer'

type DisclaimerPageProps = {}

const DisclaimerPage: React.FunctionComponent<DisclaimerPageProps> = () => {
  return (
    <Layout>
      <SEO title="Disclaimer" description="Disclaimer For Webbrainsmedia" />

      <Disclaimer />
    </Layout>
  )
}

export default DisclaimerPage
