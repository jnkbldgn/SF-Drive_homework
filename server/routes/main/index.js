const { rootResolve } = require('../../utils/path');

function mainCtrl(req, res) {
  try {
    const filePath = rootResolve('./dist/index.html');
    res.type('html');
    res.status(200);
    res.sendFile(filePath);
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = mainCtrl;
