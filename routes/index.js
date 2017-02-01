var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var configAuth = require('../auth');


var client = new Twitter({
  consumer_key: configAuth.twitterAuth.consumer_key,
  consumer_secret: configAuth.twitterAuth.consumer_secret,
  access_token_key: configAuth.twitterAuth.access_token_key,
  access_token_secret: configAuth.twitterAuth.access_token_secret
});

/* GET home page. */

router.get('/recent', function(req, res, next) {
  let recent = {screen_name: req.query.recent}
  client.get('statuses/user_timeline', recent , function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
    else {
      res.json({ error: error });
    }
  });
});
router.get('/home', function(req, res, next) {
  let home = {count: 20}
  client.get('statuses/home_timeline', home , function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
    else {
      res.json({ error: error });
    }
  });
});

module.exports = router;

module.exports = router;
