"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
require('dotenv').config();
const port = 5000;
app.use(cors_1.default());
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGO_URI).then(res => {
    console.log('connected to DB');
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
const server = app.listen(port, () => {
    console.log(`server is listen on ${port}`);
});
