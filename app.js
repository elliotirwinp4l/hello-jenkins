var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('hello jenkins');
});

app.get('/2/', function (req, res) {
	res.send('hi there');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
