"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const http = require('http');
const socket_io_1 = require("socket.io");
const port = 4000;
// app.listen(port, ()=>{
//     console.log(`server listening on port ${port}`);
// })
const server = http.createServer(app);
const cors_1 = __importDefault(require("cors"));
app.use(cors_1.default());
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["get", "post"],
    }
});
io.on('connection', (socket) => {
    console.log(`${socket.id}`);
    socket.on('send_message', (data) => {
        console.log(data);
    });
});
require("dotenv").config();
app.use('/*', express_1.default.static("client/build"));
app.use(express_1.default.json());
const url = process.env.MONGO_URI;
mongoose_1.default.connect(url).then((res) => {
    console.log('connected to DB');
}).catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
});
const messageRoute_1 = __importDefault(require("./API/messageRoute"));
app.use('/messaging', messageRoute_1.default);
server.listen(port, () => {
    console.log(`server are listening on http://localhost:${port}`);
});
