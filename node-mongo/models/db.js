const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeedb',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("mongo connect");
    }else{
        console.log("not connect"+err);
    }
});

require('./employee.model');