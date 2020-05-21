import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../containers/contact'

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact WebBrainsMedia for any suggestions, issues and we will try to implement/resolve them ASAP."
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage
