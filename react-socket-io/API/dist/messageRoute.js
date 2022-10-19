"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var loginCont_1 = require("./controllers/loginCont");
var messageCont_1 = require("./controllers/messageCont");
router.post('/add-user', loginCont_1.addUser)
    .get('/find-user', loginCont_1.findUser)
    .post('/add-message', messageCont_1.addMessage)
    .get('/find-messages', messageCont_1.findMessages);
exports["default"] = router;
