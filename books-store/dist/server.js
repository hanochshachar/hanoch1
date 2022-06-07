"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var port = process.env.PORT | 4000;
app.use(express.static('public'));
var bookRoute_1 = require("./route/bookRoute");
app.use('/books', bookRoute_1["default"]);
app.listen(port, function () {
    console.log("listen on port " + port);
});
