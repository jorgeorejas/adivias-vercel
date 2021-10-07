// Fetch the followers of a user account, by ID
// https://developer.twitter.com/en/docs/twitter-api/users/follows/quick-start

const needle = require('needle');

// this is the ID for @TwitterDev
const userId = 335858965;
const url = `https://api.twitter.com/2/users/${userId}/followers`;
const bearerToken =
  'AAAAAAAAAAAAAAAAAAAAAAZMQgEAAAAAtw6BdDSS4N8McyigmGI1l5Mui%2Fg%3DCHD8a3k8O6VWGLut9VQmFsXM356UQwF7cgx79txmIY76fLIgU8';

const getFollowers = async () => {
  let users = [];
  let params = {
    max_results: 1000,
    'user.fields': 'created_at,verified,public_metrics'
  };

  const options = {
    headers: {
      'User-Agent': 'v2FollowersJS',
      authorization: `Bearer ${bearerToken}`
    }
  };

  let hasNextPage = true;
  let nextToken = null;
  console.log('Retrieving followers...');
  while (hasNextPage) {
    let resp = await getPage(params, options, nextToken);
    if (
      resp &&
      resp.meta &&
      resp.meta.result_count &&
      resp.meta.result_count > 0
    ) {
      if (resp.data) {
        users.push.apply(users, resp.data);
      }
      if (resp.meta.next_token) {
        nextToken = resp.meta.next_token;
      } else {
        hasNextPage = false;
      }
    } else {
      hasNextPage = false;
    }
  }

  console.log(users);
  console.log(`Got ${users.length} users.`);
};

const getPage = async (params, options, nextToken) => {
  if (nextToken) {
    params.pagination_token = nextToken;
  }

  try {
    const resp = await needle('get', url, params, options);

    if (resp.statusCode != 200) {
      console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
      return;
    }
    return resp.body;
  } catch (err) {
    throw new Error(`Request failed: ${err}`);
  }
};

getFollowers();
