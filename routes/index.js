var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/signal', function(req, res, next) {
  var latitude = req.body.latitude || req.query.latitude;
  var longitude = req.body.longitude || req.query.longitude;
  var signal = req.body.signal || req.query.signal;

  res.json({
    result: 1,
    latitude: latitude,
    longitude: longitude,
    signal: signal
  });
});

module.exports = router;
