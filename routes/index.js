var express = require('express');
var router = express.Router();
const tweet = require('../controllers/controller.twatt');

/* get time line */
router.get('/timeline', tweet.timeline);
/* GET home page. */
router.get('/search/:search', tweet.search);


module.exports = router;
