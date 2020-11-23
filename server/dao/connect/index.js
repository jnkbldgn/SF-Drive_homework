const mongoose = require('mongoose');

const URL = 'mongodb://localhost/test';
const options = {
  useNewUrlParser: true,
};

function init() {
  const connection = mongoose.connect(URL, options);
  return connection;
}

module.exports = init;
