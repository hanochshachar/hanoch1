"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteBookCart = exports.cartGet = exports.clientCartPost = exports.clientGet = exports.deleteBook = exports.updatePrice = exports.updateDescription = exports.getBook = exports.postBook = void 0;
var addBook = [];
var clientCart = [];
function postBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, image, name, description, price, bookDetails, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, req.body];
                case 1:
                    _a = _b.sent(), image = _a.image, name = _a.name, description = _a.description, price = _a.price;
                    bookDetails = { image: image, name: name, description: description, price: price, serialNo: uid() };
                    addBook.push(bookDetails);
                    return [4 /*yield*/, res.send({ addBook: addBook })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res.send({ error: error_1 });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.postBook = postBook;
;
function getBook(req, res) {
    try {
        res.send({ addBook: addBook });
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.getBook = getBook;
function updateDescription(req, res) {
    try {
        var _a = req.body, serialNo_1 = _a.serialNo, description = _a.description;
        var filter = addBook.findIndex(function (book) { return book.serialNo = serialNo_1; });
        addBook[filter].description = description;
        res.send({ addBook: addBook });
        if (!description)
            throw new Error('description is require');
        if (!serialNo_1)
            throw new Error('serialNo is require');
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.updateDescription = updateDescription;
function updatePrice(req, res) {
    try {
        var _a = req.body, serialNo_2 = _a.serialNo, price = _a.price;
        var indexBook = addBook.findIndex(function (book) { return book.serialNo = serialNo_2; });
        addBook[indexBook].price = price;
        res.send({ addBook: addBook });
        if (!price)
            throw new Error('price is require');
        if (!serialNo_2)
            throw new Error('serialNo is require');
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.updatePrice = updatePrice;
function deleteBook(req, res) {
    try {
        var serialNo_3 = req.body.serialNo;
        addBook = addBook.filter(function (book) { return book.serialNo !== serialNo_3; });
        res.send({ addBook: addBook });
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.deleteBook = deleteBook;
function clientGet(req, res) {
    try {
        res.send({ addBook: addBook });
    }
    catch (error) {
        res.send({ Error: error.message });
    }
}
exports.clientGet = clientGet;
function clientCartPost(req, res) {
    try {
        // console.log(req.body)
        var serialNo_4 = req.body.serialNo;
        // console.log(serialNo);
        var cartFilter = addBook.find(function (book) { return book.serialNo === serialNo_4; });
        console.log(cartFilter);
        if (cartFilter) {
            clientCart.push(cartFilter);
            res.send({ ok: true, clientCart: clientCart });
        }
        else {
            res.send({ ok: false, message: "No book find" });
        }
        // console.log(clientCart)
    }
    catch (error) {
        res.send({ Error: error.message });
    }
}
exports.clientCartPost = clientCartPost;
function cartGet(req, res) {
    res.send({ clientCart: clientCart });
}
exports.cartGet = cartGet;
function deleteBookCart(req, res) {
    try {
        var serialNo_5 = req.body.serialNo;
        clientCart = clientCart.filter(function (book) { return book.serialNo !== serialNo_5; });
        res.send({ clientCart: clientCart });
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.deleteBookCart = deleteBookCart;
function uid() {
    var id = "id" + Math.random().toString(16).slice(2);
    return id;
}
