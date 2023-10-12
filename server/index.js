require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const mysql = require('mysql2/promise');
const login = require('./API_LOGIN/login');
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;

const app = express();

app.use((req,res,next)=>{
    next()
});
app.use(express.json());
app.use(cors({}));

const connection = async ()=>{
    const db = await mysql.createConnection({
        user:"admin",
        host:dbHost,
        password:dbPassword,
        database:"Villa"
    })
    return db;
};

app.use('/',login);


app.listen(4444,()=>{
    console.log("server is running")
});

