/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports.resolve = (value) => path.resolve(__dirname, value);

module.exports.rootResolve = (value) => path.resolve(__dirname, '../../', value);
