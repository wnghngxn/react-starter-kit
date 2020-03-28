const jsonServer = require('json-server');
const path = require('path');
const dotenv = require('../../lib/dotenv');
dotenv();

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const routes = {};

server.use(jsonServer.rewriter(routes));

router.render = function(req, res) {
  res.jsonp({
    code: 0,
    data: res.locals.data,
    error: '',
  });
};

server.use(middlewares);
server.use(router);
server.listen(3001, function() {
  console.log(`JSON Server is running in http://localhost:3001`);
});
