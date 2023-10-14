require('dotenv').config();
const express = require('express');
const getData = express.Router();
const mysql = require('mysql2/promise');
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;

const connection = async ()=>{
    const db = await mysql.createConnection({
        user:"admin",
        host:dbHost,
        password:dbPassword,
        database:"testVilla"
    })
    return db;
};

getData.get('/admin/getData' ,async (req,res)=>{
    const db = await connection();
    const [result] = await db.query('select * from HouseOwner');
    res.json(result);
    console.log(result);
});

module.exports = getData;