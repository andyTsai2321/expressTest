var express = require('express');
var router = express.Router();
const handleErrorAsync = require('../service/handleErrorAsync');

/* GET users listing. */
router.get('/', handleErrorAsync(
  function (req, res, next) {
    res.send('respond with a resource');
  }
));


module.exports = router;
