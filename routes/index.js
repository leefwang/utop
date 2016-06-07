var express = require('express');
var router = express.Router();

var latitude = 0;
var longitude = 0;
var signal = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/signin', function(req, res, next) {
  var userInfo = [{
    id: "admin",
    password: "1234"
  }, {
    id: "client",
    password: "1234"
  }];

  for (i = 0; i < userInfo.length; i++) {
    if (userInfo[i].id === req.body.id && userInfo[i].password === req.body.password) {
      return res.json({
        result: 1
      });
    }
  }

  res.json({
    result: 0,
    msg: "Invalid ID or password"
  });
});

router.all('/signal', function(req, res, next) {
  latitude = req.body.latitude || req.query.latitude;
  longitude = req.body.longitude || req.query.longitude;
  signal = req.body.signal || req.query.signal;

  res.json({
    result: 1,
    latitude: latitude,
    longitude: longitude,
    signal: signal
  });
});

router.all('/send', function(req, res, next) {
  res.json({
    msg: signal,
    latitude: latitude,
    longitude: longitude,
    signal: signal
  });
});

module.exports = router;
