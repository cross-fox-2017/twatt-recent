var express = require('express')
var router = express.Router()
var Twitter = require('twitter')
var configAPI = require('../../../config.json')

var client = new Twitter({
  consumer_key: configAPI.API_key,
  consumer_secret: configAPI.API_secret,
  access_token_key: configAPI.Access_token,
  access_token_secret: configAPI.Access_token_secret
})

router.get('/', function (req, res) {
  var params = {screen_name: req.query.q}
  // search/tweets dari sananya!!
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    res.send(tweets)
  })
  // res.send('search')
})

module.exports = router
