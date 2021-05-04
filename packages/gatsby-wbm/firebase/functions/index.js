const Twitter = require('twitter-lite');
const axios = require('axios');
const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

exports.tweet2pdf = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    if (!request.body.tweetId) {
      return response
        .status(500)
        .send({ message: 'tweet2pdf. tweetId not sent in request' });
    }
    const tweetId = request.body.tweetId;
    const client = new Twitter({
      consumer_key: 'WL1aTfplwrgyb8QiqHEFZISBY',
      consumer_secret: 'Bng63BzIGTlg7KW9lgIvvy2s7kyVOoeGv9zjZo9VjIlwx47lZH',
      access_token_key: '324284992-yZEodFeZdxApW8k7OdnLtuRHt6tWcdLIfoVgYOnB',
      access_token_secret: 'Cjg29YRRDjT8AuOPtyJCeU6yp8YXK2XrQ2pdPVPJE2S60',
    });

    // const tweetData = await client
    //   .get('statuses/show', {
    //     id: tweetId,
    //     include_entities: true,
    //     tweet_mode: 'extended',
    //     trim_user: true,
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    let jiii = new Date(2019, 11, 24, 10, 33, 30, 0);
    let loda = jiii.toISOString();
    const tweetData = await axios
      .get('https://api.twitter.com/2/tweets/search/recent', {
        headers: {
          Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAO5ELAEAAAAAwBeyoXnzEqlUgsO0LJoDZZVZC84%3D3sKcVIEZQNiHTcV3WAuYjNVINefA9uqIHyCo3O6UlyEm4jxmWQ`,
        },
        params: {
          query: 'conversation_id:1327688091642028033',
          // // expansions: 'referenced_tweets.id.author_id,author_id',
          // // 'user.fields': 'name,username',
          // // 'tweet.fields': 'author_id',
          max_results: 90,
          // q:
          //   'from:oliverjumpertz to:oliverjumpertz',
          // since_id: '1327688091642028033',
          // count: 100,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log('===================================');
        console.log(error);
      });

    // const tweetData = await client
    //   .get('2/tweets/1327688091642028033', {
    //     expansions: 'referenced_tweets.id,referenced_tweets.id.author_id',
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // console.log(tweetData);

    response.status(200).send({ tweetData });
  });
});
