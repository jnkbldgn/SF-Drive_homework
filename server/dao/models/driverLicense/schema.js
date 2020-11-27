const mongoose = require('mongoose');

const { Schema } = mongoose;

const driverLicenseSchema = {
  userId: String,
  number: String,
  createAt: Date,
};

const driverLicense = new Schema(driverLicenseSchema);

module.exports = driverLicense;
