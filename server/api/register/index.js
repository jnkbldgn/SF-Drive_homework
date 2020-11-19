function register(req, res, next) {
  const { body = {} } = req;
  console.info(body);
  next();
}

module.exports = register;
