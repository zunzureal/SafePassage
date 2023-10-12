require('dotenv').config();
const express = require('express');
const login = express.Router();
const cors = require ('cors');
const mysql = require('mysql2/promise');
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;

const connection = async ()=>{
    const db = await mysql.createConnection({
        user:"admin",
        host:dbHost,
        password:dbPassword,
        database:"Villa"
    })
    return db;
};

login.get('/getData',async(req,res)=>{
    const db =await connection();
    const result =await db.query('select * from houseOwner');
    const data = result[0];
    res.json(data)
});

module.exports = login;