var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("public/pages/index.html", {root: '.'});
});

router.get('/code', function(req, res, next) {
  res.sendFile("public/pages/code.html", {root: '.'});
});

router.get('/experience', function(req, res, next) {
  res.sendFile("public/pages/experience.html", {root: '.'});
});

router.get('/contact', function(req, res, next) {
  res.sendFile("public/pages/contact.html", {root: '.'});
});

router.get('/email', function(req, res, next) {



  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dannysullivanwebsite@gmail.com',
      pass: 'djsullivanwebsite'
    }
  });

  var mailOptions = {
    from: 'dannysullivanwebsite@gmail.com',
    to: 'danielj.sullivan@outlook.com',
    subject: 'Sending email with node.js',
    text: 'super easy'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
