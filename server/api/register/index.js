function register(req, res) {
  console.info(req);
  res.type('json');
  res.status(200);
  res.send('ok');
}

module.exports = register;
