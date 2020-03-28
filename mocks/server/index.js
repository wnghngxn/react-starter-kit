const koa = require('koa');
const app = new koa();
const dotenv = require('../../lib/dotenv');
dotenv();

const port = process.env.DEV_MOCK_SERVER_PORT;

app.listen(port, () => {
  console.log(`Koa Server running in http://localhost:${port}`);
});
