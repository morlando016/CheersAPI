var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  //res.send('GET a user. This is for reading. Here is some example JSON');

  //example json
  res.json({username: 'Username001', email: 'email@hello.com'});
});

router.post('/', function(req, res, next) {
  res.send('POST a user. This is for creating.');
});

router.put('/', function(req, res, next) {
  res.send('PUT a user. This is for updating.');
});

router.delete('/:id', function(req, res, next) {
  res.send('DELETE a user. This is for deleting.');
});

module.exports = router;
