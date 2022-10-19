"use strict";
exports.__esModule = true;
exports.messageModel = void 0;
var mongoose_1 = require("mongoose");
var messageSchema = new mongoose_1["default"].Schema({
    content: {
        type: String,
        required: true,
        date: new Date()
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
exports.messageModel = mongoose_1["default"].model('messages', messageSchema);
