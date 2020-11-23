const express = require('express');
const createError = require('http-errors');
const registerCtrl = require('./register');

const router = express.Router();

router.post('/register', registerCtrl);

router.use(() => {
  throw createError(404);
});

module.exports = router;
