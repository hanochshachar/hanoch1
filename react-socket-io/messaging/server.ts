import express  from "express";
import mongoose from "mongoose";
const app = express();
const port:number = 4000;

require("dotenv").config();

app.use('/*', express.static("client/build"));
app.use(express.json());


const url = process.env.MONGO_URI;

mongoose.connect(url?url:'').then((res)=>{
    console.log('connected to DB');
}).catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });


app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
    
})