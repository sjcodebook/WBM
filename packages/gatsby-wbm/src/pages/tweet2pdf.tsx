import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import parse from 'twitter-url-parser';
import axios from 'axios';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type Tweet2pdfPageProps = {};

const tweet2pdf: React.FunctionComponent<Tweet2pdfPageProps> = (props: any) => {
  const [tweetId, settweetId]: any = useState(null);

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    if (query['url']) {
      let parsedTweetId = parse(query['url']);
      if (parsedTweetId) {
        settweetId(parsedTweetId.id);
        axios
          .post(
            'http://localhost:5001/twitter-thread-pdf/us-central1/helloWorld',
            {
              tweetId: parsedTweetId.id,
            }
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }, [props.location.search]);

  return (
    <Layout>
      <SEO
        title="tweet2pdf"
        description="tweet2pdf by WebBrainsMedia || Convert and download twitter tweets/threads in PDF"
      />
      {tweetId}
    </Layout>
  );
};

export default tweet2pdf;
