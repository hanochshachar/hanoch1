import express from "express";
import mongoose from "mongoose";
var app = express();
var port = 4000;
require("dotenv").config();
app.use('/*', express.static("client/build"));
app.use(express.json());
var url = process.env.MONGO_URI;
mongoose.connect(url ? url : '').then(function (res) {
    console.log('connected to DB');
}).catch(function (err) {
    console.log("At mongoose.connect:");
    console.error(err.message);
});
app.listen(port, function () {
    console.log("server listening on port " + port);
});