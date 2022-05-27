const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userRegistration')
.then(()=>{
    console.log("Connected to mongodb");
}).catch(err=>{
    console.log("Error in connecting to mongodb",err);
}); 