require('dotenv').config();
const express = require('express');
const visitor = express.Router();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const qrcode = require('qrcode');
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
//Receive and insert visitor that houseOwner fill in data
visitor.post('/genQR',async (req, res)=>{
    try{
        const { id ,houseNo ,firstName ,lastName ,licenseTemplate} = req.body;
        const db = await connection()
        const password = id+houseNo+firstName+lastName+licenseTemplate;
        const moPassword = await bcrypt.hash(password ,10)
        await db.query(
                `insert into Visitor(Password,VisitorID,VisitAt,FirstName,LastName,LicenseTemplate)
                values(
                    ?,?,?,?,?,?
                )`,[moPassword,id,houseNo,firstName,lastName,licenseTemplate]
            )
        await db.query(`insert into QrCode(Password) values('${moPassword}')`)
            qrcode.toDataURL(moPassword,function(err,data){
            res.json(data)
        });
    }catch(err){
        console.log(err)
    }
});
module.exports = visitor;