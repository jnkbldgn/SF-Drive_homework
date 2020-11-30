const mongoose = require('mongoose');

const { Schema } = mongoose;

const identityCardSchema = {
  userId: String,
  number: String,
  createAt: Date,
  authority: String,
  code: String,
};

const identityCard = new Schema(identityCardSchema);

module.exports = identityCard;
