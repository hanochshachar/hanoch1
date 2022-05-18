
const express = require('express');
const app = express();
const port = process.env.PORT | 4000;

app.use(express.json());
app.use(express.static('public'));



app.listen(port, ()=>{
    console.log(`listen on port ${port}`)
})

