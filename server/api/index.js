const express = require('express');
const registerCtrl = require('./register');

const router = express.Router();

router.post('/register', registerCtrl);

module.exports = router;
