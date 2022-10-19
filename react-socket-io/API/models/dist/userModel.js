"use strict";
exports.__esModule = true;
exports.userModel = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});
exports.userModel = mongoose_1["default"].model('users', userSchema);
