"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Login_1 = require("./component/Login");
var react_router_dom_1 = require("react-router-dom");
var Chat_1 = require("./component/Chat");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/login', element: react_1["default"].createElement(Login_1.Login, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/chat', element: react_1["default"].createElement(Chat_1.Socket, null) }))));
}
exports["default"] = App;
