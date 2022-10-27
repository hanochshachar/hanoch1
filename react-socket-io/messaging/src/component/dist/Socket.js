"use strict";
exports.__esModule = true;
exports.Socket = void 0;
var react_1 = require("react");
var io = require("socket.io-client");
var socket = io.connect("http://localhost:4000");
exports.Socket = function () {
    var sendMessage = function () {
        socket.emit('send_message', { message: "hello" });
    };
    return (react_1["default"].createElement("div", { className: "Socket" },
        react_1["default"].createElement("input", { type: "text", name: "message", placeholder: 'message...' }),
        react_1["default"].createElement("button", { onClick: sendMessage }, "send")));
};
