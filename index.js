var express = require('express');
var cors = require('cors');
const res = require('express/lib/response');
const externalFunction = require('./externalFunction')
var app = express();
app.use(cors());

app.listen(3000);
console.log("The server is now running on port 3000.");

app.get('/weatherResult', function (req, res) {
    externalFunction.weatherResult(res)
});








