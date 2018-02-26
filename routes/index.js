var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Camilia\'s page' });
});

router.get('/twitch_api', function(req, res, next) {
  res.render('twitch_api', { title: 'Twitch Api Example' });
});


module.exports = router;