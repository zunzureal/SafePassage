require('dotenv').config();
const express = require('express');
const grab = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const qrcode = require('qrcode');
const visitor = require('./visitor');
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

visitor.post('/grabGenQr', async(req,res)=>{
    try{
        const {firstName, lastName, houseNo, licenseTemplate} = req.body;
        const db = await connection();
        const password = firstName+lastName+houseNo+licenseTemplate;
        const moPassword = await bcrypt.hash(password,10);
        await db.query(`
            insert into GrabDeliver(Password,FirstName,LastName,HouseNumber, LicenseTemplate)
            values(?,?,?,?,?)
        `,[moPassword, firstName, lastName, houseNo, licenseTemplate]);
        await db.query(`insert into QrCode(Password) values(?)`,moPassword)
        qrcode.toDataURL(moPassword,function(err,data){
            res.json(data);
        });
    }catch(err){
        console.log(err);
        res.json(err);
    }
});


module.exports = grab;