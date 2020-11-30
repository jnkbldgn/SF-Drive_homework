const createError = require('http-errors');

class UserService {
  constructor(connect, userModel, identityCardModel, driverLicenseModel) {
    this.connect = connect;
    this.userModel = userModel;
    this.identityCardModel = identityCardModel;
    this.driverLicenseModel = driverLicenseModel;
  }

  async create(userReg) {
    const { connection } = await this.connect();

    const {
      email,
    } = userReg;

    const oldUser = await this.userModel.findOne({ email });

    if (oldUser) {
      connection.close();
      throw createError(403, 'USER_EXISTS');
    }

    try {
      const user = await this.userModel.create(userReg);
      return user;
    } catch (e) {
      throw createError.BadRequest(e);
    } finally {
      connection.close();
    }
  }

  async createFull(userReg, identityCardReq, driverLicenseReq) {
    const user = await this.create(userReg);

    const { _id: userId } = user;
    const { connection } = await this.connect();

    const identityCard = {
      userId,
      ...identityCardReq,
    };

    const driverLicense = {
      userId,
      ...driverLicenseReq,
    };

    try {
      const identityCardRes = await this.identityCardModel.create(identityCard);
      const driverLicenseRes = await this.driverLicenseModel.create(driverLicense);
      return {
        user,
        identityCard: identityCardRes,
        driverLicense: driverLicenseRes,
      };
    } catch (e) {
      throw createError.BadRequest(e);
    } finally {
      connection.close();
    }
  }
}

module.exports = UserService;
