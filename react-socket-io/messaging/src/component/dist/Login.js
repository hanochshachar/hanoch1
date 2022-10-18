"use strict";
exports.__esModule = true;
exports.Login = void 0;
var react_1 = require("react");
var uuid_1 = require("uuid");
exports.Login = function (_a) {
    var setIdUser = _a.setIdUser;
    var idRef = react_1.useRef(null);
    var handleSubmit = function (ev) {
        var _a;
        ev.preventDefault();
        setIdUser((_a = idRef.current) === null || _a === void 0 ? void 0 : _a.value);
    };
    var createId = function () {
        setIdUser(uuid_1.v4());
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("label", { htmlFor: "id" }, "Enter your id"),
            react_1["default"].createElement("input", { type: "text", ref: idRef, name: "id", required: true }),
            react_1["default"].createElement("input", { type: "submit", value: "login", className: 'login loginBtns' }),
            react_1["default"].createElement("button", { onClick: createId }, "create A new Id"))));
};
