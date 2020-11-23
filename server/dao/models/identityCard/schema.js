const mongoose = require('mongoose');

const { Schema } = mongoose;

const identityCardSchema = {
  userId: String,
  identityCardNumber: String,
  identityCardCreateAt: Date,
  identityCardAuthority: String,
  identityCardCode: String,
};

const identityCard = new Schema(identityCardSchema);

module.exports = identityCard;
