"use strict";
exports.__esModule = true;
exports.getBook = exports.postBook = void 0;
var addBook = [];
function postBook(req, res) {
    try {
        var _a = req.body, image = _a.image, name = _a.name, price = _a.price, description = _a.description;
        if (!image)
            throw new Error("image is required");
        if (!name)
            throw new Error("name is required");
        if (!price)
            throw new Error("price is required");
        var bookDetail = { image: image, name: name, price: price, description: description, serialNo: uid() };
        addBook.push(bookDetail);
        res.send({ addBook: addBook });
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.postBook = postBook;
;
function getBook(req, res) {
    try {
        res.send({ addBook: addBook });
    }
    catch (error) {
        res.send({ error: error.message });
    }
}
exports.getBook = getBook;
function uid() {
    var id = "id" + Math.random().toString(16).slice(2);
    return id;
}
