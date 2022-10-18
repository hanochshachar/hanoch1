"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var messageSchema = new mongoose_1["default"].Schema({
    content: {
        type: String,
        required: true
    },
    senderID: {
        type: String,
        required: true
    },
    receiverID: {
        type: String,
        required: true
    }
});
var messageModel = mongoose_1["default"].model('messages', messageSchema);
