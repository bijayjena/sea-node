const express = require('express');
const path = require('path');
const app = express();
require('./db/conn'); 

const port = process.env.PORT || 3000;

const indexPath = path.join(__dirname,'../public');

app.use(express.static(indexPath));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});

