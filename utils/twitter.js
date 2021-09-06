const twit = require('twit');

const Twitter = new twit({
  consumer_key: '5ZANwLf4lcbtE7Morb6z8LSg3',
  consumer_secret: 'ngvJh2nnYgUBMzBD6rI5o4oaWCMWrxjfIbvn8k5hLjGOJeagRL',
  access_token: '1089101618476449792-00hjt7Y8reBWY1iWdjwNl0C7eQQKOu',
  access_token_secret: 'H939k7z3o2Au6duRroxpDRzGpXFyy4M5bnUWoOf9vDZoS',
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
