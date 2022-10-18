"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Login_1 = require("./component/Login");
function App() {
    var _a = react_1.useState(), idUser = _a[0], setIdUser = _a[1];
    return (react_1["default"].createElement("div", { className: "App" },
        idUser,
        react_1["default"].createElement(Login_1.Login, { setIdUser: setIdUser })));
}
exports["default"] = App;
