import express  from "express";
import mongoose from "mongoose";
const app = express();
const http = require('http');
import { Server } from 'socket.io';

const port:number = 4000;

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
    
})

const server = http.createServer(app);
import cors from "cors";

app.use(cors())

const io = new Server(server, {
    cors: {
        origin : "http://localhost:3000",
        methods: ["get", "post"],
    }
});

io.on('connection', (socket) => {
    console.log(`${socket.id}`)
    socket.on('send_message', (data) => {
        console.log(data);
        
    })
})


require("dotenv").config();

app.use('/*', express.static("client/build"));
app.use(express.json());


const url = process.env.MONGO_URI;

mongoose.connect(url).then((res)=>{
    console.log('connected to DB');
}).catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });


  import msgRouter from './API/messageRoute'
  app.use('/messaging', msgRouter)


