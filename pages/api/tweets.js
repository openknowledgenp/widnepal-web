export default async (req, res) => {
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: process.env.APPLICATION_CONSUMER_KEY,
    consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });
  var params = {q: '#WomenInData+OR+#WomenInDataNepal+OR+#OpenDataNepal+OR+#Data4Nepal'};

  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      res.send(tweets)
    } else {
      res.send({statuses: []})
    }
  });
}
