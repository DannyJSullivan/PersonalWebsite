var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

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
  res.sendFile("public/pages/contact.html", {root: '.'});
});

router.get('/email', function(req, res, next) {

});

module.exports = router;
