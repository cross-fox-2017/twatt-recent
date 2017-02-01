var express = require('express');
var router = express.Router();

var searchTweet = require('../helpers/twitter_util')
/* search twitter */
router.get('/search', function(req, res, next) {
  searchTweet.getTweet(req.query.keyword,function(data){
    res.json(JSON.parse(data))
  })
});

/*display user timeline*/
router.get('/display', function(req, res, next) {
  searchTweet.getRecent(function(data){
    var dataObject = JSON.parse(data)
    res.json(dataObject)
  })
});

module.exports = router;
