const express = require('express');
const app = express();
const dotenv = require('../dotenv');
const fs = require('fs');
dotenv();

const handleIndex = (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  fs.createReadStream('./build/index.html').pipe(res);
};
app.use(express.static('./build'));
app.get('/*', handleIndex);

app.listen(8080, () => {
  console.log('static server is running in http://localhost:8080');
});
