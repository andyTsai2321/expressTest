var express = require('express');
var router = express.Router();
const UsersControllers = require('../controllers/user');

/* GET users listing. */
router.get('/', UsersControllers.getUsers);
router.get('/:id', UsersControllers.getUsers);

module.exports = router;
