"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var bookCont_1 = require("../controlers/bookCont");
var bookCont_2 = require("../controlers/bookCont");
router.post('/booksStore', bookCont_1.postBook);
router.get('/booksStore', bookCont_2.getBook);
exports["default"] = router;
