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

app.get('/favicon.ico', (req, res) => res.status(200));
app.use('/public', express.static(rootResolve(__dirname, './public')));
app.use('/api', api);
app.use(routes);

app.use((err, req, res) => {
  if (err) {
    console.error(err);
    const { status } = err;
    res.status(status);
    res.send(`Error ${status}`);
  } else {
    res.status(200);
    res.send('Success');
  }
});

app.listen(port, () => console.info(`App listening at http://localhost:${port}`));
