/* Controllers */
const loginController = require('../controller/account.controller');
/* Packages */
const express = require('express');
const router = express.Router();

router.post('/register', loginController.signup);
router.post('/login', loginController.login);

module.exports = router;