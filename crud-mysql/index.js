const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"user",
    password:"password",
    database:"employeeDB",
    insecureAuth : true,
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('connect db');
    }else{
        console.log('connection failed \n error:'+err);
    }
});
app.listen(3000,()=>console.log('express server runnig:3000'));
app.get('/employees',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employee',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            console.log(rows[0].id);
        }else{
            console.log(err);
        }
    });
});

app.get('/employees/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employee WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
            
        }else{
            console.log(err);
        }
    });
});

app.delete('/employees/delete/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM employee WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

app.delete('/employees/create',(req,res)=>{
    mysqlConnection.query('DELETE FROM employee WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});