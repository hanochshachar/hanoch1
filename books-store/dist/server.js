"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express = require('express');
var app = express();
var port = process.env.PORT | 3000;
app.use(express.static('public'));
var bookRoute_1 = __importDefault(require("./route/bookRoute"));
app.use('/books', bookRoute_1["default"]);
app.listen(port, function () {
    console.log("listen on port " + port);
});
