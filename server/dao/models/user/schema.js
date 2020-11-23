const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = {
  fio: String,
  birthday: Date,
  email: String,
  phone: String,
  password: String,
};

const user = new Schema(userSchema);

module.exports = user;
