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
        database:"testVilla"
    })
    return db;
};
// Test
/* visitor.get('/getData',async(req,res)=>{
    const db =await connection();
    const result =await db.query('select * from Visitor');
    const data = result[0];
    console.log(data)
    res.json(data)
});

 */
//Receive and insert visitor that houseOwner fill in data
visitor.post('/genQR',async (req, res)=>{
    try{
        const { id ,houseNo ,type ,firstName ,lastName ,licenseTemplate} = req.body;
        const db = await connection()
        const password = id+houseNo+firstName+lastName+licenseTemplate;
        const moPassword = await bcrypt.hash(password ,10)
        await db.query
            (
                `insert into visitor(password,id_visitor,house_no,type,first_name,last_name,license_template)
                values(
                    ?,?,?,?,?,?,?
                )`,[moPassword,id,houseNo,type,firstName,lastName,licenseTemplate]
            )
        await db.query(`insert into QRCode(password) values('${moPassword}')`)
            qrcode.toDataURL(moPassword,function(err,data){
            res.json(data)
        });
    }catch(err){
        console.log(err)
    }
});

module.exports = visitor;