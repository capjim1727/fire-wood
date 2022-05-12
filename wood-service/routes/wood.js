var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { title: 'card1', cols: 2, rows: 1 },
      { title: 'card1', cols: 2, rows: 1 },
      { title: 'card1', cols: 2, rows: 1 },
      { title: 'card1', cols: 2, rows: 1 }
    ],
    "webCards": [
      { title: 'card1', cols: 2, rows: 1 },
      { title: 'card1', cols: 2, rows: 1 },
      { title: 'card1', cols: 2, rows: 1 },
      { title: 'card1', cols: 2, rows: 1 }
    ],
  }

  res.json(jsonResponse); 
});

module.exports = router;
