const express = require('express');
const houseOwner = express.Router();
require('dotenv').config();
const bcrypt = require('bcrypt');
const qrcode = require('qrcode');
const mysql = require('mysql2/promise')
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

houseOwner.post('/houseOwnerGenQr',async(req,res)=>{
    const {username, password} = req.body;
    try{
        const db = await connection();
        const sumPassword = username+password;
        const hashPassword = await bcrypt.hash(sumPassword, 10);
        await db.query(`insert into QRCode(password) values(?)`,hashPassword);
        qrcode.toDataURL(hashPassword,function(err,data){
            res.json(data)
        })
    }catch(err){
        console.log(err)
    }
});

module.exports = houseOwner;