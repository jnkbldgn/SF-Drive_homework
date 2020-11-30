const express = require('express');
const routes = require('./routes');
const api = require('./api');
const { rootResolve } = require('./utils/path');

const app = express();

const { PORT: port = '8080', NODE_ENV = 'production' } = process.env;
const isDev = NODE_ENV === 'development';

if (isDev) {
  // eslint-disable-next-line global-require
  const devBuild = require('./devBuild');
  const { devMiddleware, hotMiddleware } = devBuild();

  app.use(devMiddleware);
  app.use(hotMiddleware);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => res.send('SF'));
app.use('/public', express.static(rootResolve(__dirname, './public')));
app.use('/api', api);
app.use(routes);

app.use((error, req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }
  const {
    status = 500,
    message = {},
    stack = '',
  } = error;

  const body = {
    status,
    message: message.message || 'Internal Server Error',
    errors: message.errors,
  };

  if (isDev) {
    body.stack = stack;
  }

  console.error('Error  status:', body.status);
  console.error('Error  message:', body.message);
  console.error('Errors:', body.errors);

  res.status(status);
  res.json(body);
});

app.listen(port, () => console.info(`App listening at http://localhost:${port}`));
