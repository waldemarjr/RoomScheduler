var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Teste');
});

app.listen(3000, function () {
  console.log('Backend listening on port 3000!');
});
