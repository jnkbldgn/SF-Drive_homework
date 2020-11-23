const mongoose = require('mongoose');

const { Schema } = mongoose;

const driverLicenseSchema = {
  userId: String,
  driverLicenseNumber: String,
  driverLicenseCreateAt: Date,
};

const driverLicense = new Schema(driverLicenseSchema);

module.exports = driverLicense;
