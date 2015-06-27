var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2', { title: 'Wallbook' });
});
router.get('/Signup', function(req, res, next) {
  res.render('index', { title: 'Wallbook' });
});

module.exports = router;
