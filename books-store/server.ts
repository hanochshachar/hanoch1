const express = require('express');
const app = express();
const port = process.env.PORT | 3000;

app.use(express.static('public'));
app.use(express.json());

import storeRoute from './route/bookRoute'
app.use('/books', storeRoute)


app.listen(port, ()=>{
    console.log(`listen on port ${port}`)
})

