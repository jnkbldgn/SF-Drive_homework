const connect = require('../../dao/connect');
const User = require('../../dao/models/user');

class UserService {
  constructor(dbConnect, logger) {
    this.logger = logger;
    this.dbConnect = dbConnect;
  }

  async create(user) {
    await this.dbConnect();

    const userModel = new User(user);
  }
}

const userService = new UserService(connect, console);

module.exports = userService;
