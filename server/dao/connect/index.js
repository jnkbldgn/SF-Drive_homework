const createError = require('http-errors');
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/sf_local';
const options = {
  useNewUrlParser: true,
};

const init = async () => {
  try {
    const connect = await mongoose.connect(URL, options);
    return connect;
  } catch {
    throw createError.ServiceUnavailable();
  }
};

module.exports = init;
