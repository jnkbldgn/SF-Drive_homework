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
      throw createError(403, 'User already exists');
    }

    this.userModel.create(userReg, (error, user) => {
      connection.close();
      if (error) {
        throw createError.BadRequest(error);
      }
      return user;
    });
  }

  async createFull(userReg, identityCardReq, driverLicenseReq) {
    const user = await this.create(userReg);
    if (user) {
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

      const promises = [
        this.identityCardModel.create(identityCard),
        this.driverLicenseModel.create(driverLicense),
      ];

      Promise.all(promises)
        .then(([identityCardRes, driverLicenseRes]) => {
          connection.close();
          return {
            user,
            identityCard: identityCardRes,
            driverLicense: driverLicenseRes,
          };
        })
        .catch((error) => {
          connection.close();
          throw createError.BadRequest(error);
        });
    }
  }
}

module.exports = UserService;
