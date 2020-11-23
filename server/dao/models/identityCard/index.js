const mongoose = require('mongoose');
const schema = require('./schema');

const IdentityCard = mongoose.model('IdentityCard', schema);

module.exports = IdentityCard;
