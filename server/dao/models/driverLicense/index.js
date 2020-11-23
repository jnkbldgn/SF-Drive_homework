const mongoose = require('mongoose');
const schema = require('./schema');

const DriverLicense = mongoose.model('DriverLicense', schema);

module.exports = DriverLicense;
