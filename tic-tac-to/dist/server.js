var express = require('express');
var app = express();
var port = process.env.PORT | 4000;
app.use(express.json());
app.use(express.static('public'));
app.listen(port, function () {
    console.log("listen on port " + port);
});
