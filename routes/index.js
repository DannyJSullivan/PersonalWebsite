var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile("public/pages/index.html", {root: '.'});
});

router.get('/code', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile("public/pages/code.html", {root: '.'});
});

router.get('/experience', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile("public/pages/experience.html", {root: '.'});
});

router.get('/contact', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile("public/pages/contact.html", {root: '.'});
});

module.exports = router;
