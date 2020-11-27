const asyncHandler = require('express-async-handler');
const UserService = require('../../services/user');
const UserModel = require('../../dao/models/user');
const IdentityCardModel = require('../../dao/models/identityCard');
const DriverLicenseModel = require('../../dao/models/driverLicense');
const connect = require('../../dao/connect');

const register = asyncHandler(async (req, res) => {
  const { body = {} } = req;
  const userService = new UserService(connect, UserModel, IdentityCardModel, DriverLicenseModel);

  const {
    user: userReq,
    identityCard: identityCardReq,
    driverLicense: driverLicenseReq,

  } = body;

  const { user } = userService.createFull(userReq, identityCardReq, driverLicenseReq);
  if (user) {
    const data = {
      email: user.email,
    };
    res.status(200);
    res.json(data);
  }
});

module.exports = register;
