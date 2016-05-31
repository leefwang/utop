var express = require('express');
var router = express.Router();

var latitude = 0;
var longitude = 0;
var signal = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
    msg: latitude,
    latitude: latitude,
    longitude: longitude,
    signal: signal
  });
});

module.exports = router;
