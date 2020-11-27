const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = {
  fio: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /\.+@\.+/.test(value),
      message: 'Неверный формат',
    },
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
};

const user = new Schema(userSchema);

module.exports = user;
