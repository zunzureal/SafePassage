require("dotenv").config();
const express = require("express");
const goodsDelivery = express.Router();
const mysql = require("mysql2/promise");
const qrcode = require("qrcode")
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;
const bcrypt = require('bcrypt')
const connection = async () => {
    const db = await mysql.createConnection({
        connectionLimit: 10,
        user: "admin",
        host: dbHost,
        password: dbPassword,
        database: "Villa",
    });
    return db;
};

goodsDelivery.post("/goodsDelivery/genQR",async (req, res)=>{
    try{
        const {id, licenseTemplate,guardId} =req.body
        const conn = await connection();
        const password =id+licenseTemplate+guardId
        const moPwd = await bcrypt.hash(password, 10)
        await conn.query(`INSERT into GoodsDeliver (Password,GoodsDeliverID,AuthorizedBy,licenseTemplate) values(
            ?,?,?,?
        ) `,[ moPwd, id, guardId, licenseTemplate ])
        
        await conn.query('INSERT into QrCode (Password) values(?)',moPwd)

        qrcode.toDataURL(moPwd,function(err, data){
            res.json(data)
        })
    }catch(err){
        console.log(err)
        res.json({message:"There is something wrong"})
    }
})

module.exports = goodsDelivery;
