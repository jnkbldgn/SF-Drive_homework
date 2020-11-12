const express = require('express');
const mainCtrl = require('./main');

const router = express.Router();

router.use('*', mainCtrl);

module.exports = router;
