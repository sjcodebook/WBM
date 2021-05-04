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
  const [tweetData, settweetData]: any = useState(null);

  useEffect(() => {
    const query = queryString.parse(props.location.search);
    if (query['url']) {
      let parsedTweetId = parse(query['url']);
      if (parsedTweetId) {
        settweetId(parsedTweetId.id);
        axios
          .post(
            'http://localhost:5001/twitter-thread-pdf/us-central1/tweet2pdf',
            {
              tweetId: parsedTweetId.id,
            }
          )
          .then(function (response) {
            console.log(response);
            settweetData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }, [props.location.search]);

  const syntaxHighlight = (json: any) => {
    if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      }
    );
  };

  return (
    <Layout>
      <SEO
        title="tweet2pdf"
        description="tweet2pdf by WebBrainsMedia || Convert and download twitter tweets/threads in PDF"
      />
      {tweetId}
      <br />
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: syntaxHighlight(tweetData) }}
      ></div>
      {}
    </Layout>
  );
};

export default tweet2pdf;
