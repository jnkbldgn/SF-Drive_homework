const asyncHandler = require('express-async-handler');
const UserService = require('../../services/user');
const UserModel = require('../../dao/models/user');
const connect = require('../../dao/connect');

async function register(req, res) {
  const { body = {} } = req;
  const userService = new UserService(connect, UserModel);
  const user = await userService.create(body);

  if (user) {
    res.status(200);
    res.json(user);
  }
}

module.exports = asyncHandler(register);
