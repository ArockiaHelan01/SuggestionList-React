var express = require('express');

var app = express();

app.use('/', express.static('build'));

app.listen(5000 || process.env.PORT);