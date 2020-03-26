const express = require('express');
const app = express();
const dotenv = require('../lib/dotenv');
dotenv();

const port = process.env.DEV_MOCK_SERVER_PORT;

app.listen(port, () => {
  console.log(`Mock Server running in http://localhost:${port}`);
});
