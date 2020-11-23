const createError = require('http-errors');

class UserService {
  constructor(connect, userModel) {
    this.connect = connect;
    this.userModel = userModel;
  }

  async create(request) {
    try {
      await this.connect();

      const {
        email,
      } = request;

      const oldUser = await this.userModel.findOne({ email });

      if (oldUser) {
        throw createError(403, 'User already exists');
      }

      this.userModel.create(request, (error, user) => {
        if (error) {
          throw createError.BadRequest(error);
        }
        return user;
      });
    } catch {
      throw createError.ServiceUnavailable();
    }
  }
}

module.exports = UserService;
