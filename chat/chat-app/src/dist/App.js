"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("./features/components/Login");
var Register_1 = require("./features/components/Register");
var chat_1 = require("./features/components/chat");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/login', element: react_1["default"].createElement(Login_1.Login, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/register', element: react_1["default"].createElement(Register_1.Register, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: 'chat', element: react_1["default"].createElement(chat_1.Chat, null) }))));
}
exports["default"] = App;
