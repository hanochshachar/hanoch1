"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    }
});
var userModel = mongoose_1["default"].model('users', userSchema);
