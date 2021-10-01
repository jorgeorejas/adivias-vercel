const twit = require('twit');

const Twitter = new twit({
  consumer_key: [],
  consumer_secret: [],
  access_token: [],
  access_token_secret: [],
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

const FollowersList = Twitter.get('followers/list', {
  screen_name: 'orejasjorge',
  count: 100
})
  .catch(function (err) {
    console.log('caught error', err.stack);
  })
  .then(function (result) {
    console.log('data', result.data);
  });

export { FollowersList };
