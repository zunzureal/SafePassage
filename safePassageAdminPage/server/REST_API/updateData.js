require('dotenv').config();
const express = require('express');
const updateData = express.Router();
const password = process.env.PASSWORD;
const host = process.env.HOST;
const mysql = require('mysql2/promise');

const connection = ()=>{
    return(
        mysql.createConnection({
            user:'admin',
            password:password,
            host:host,
            database:'Villa'
        })
    )
};

//! UPDATE HOUSEOWNER
updateData.put('/updateHouseOwner/:id' ,async(req, res)=>{
    const { id } = req.params;
    const { idOwner, firstName, lastName, tel } = req.body;
    try{
        const db = await connection();
        const [result] = await db.query(`update HouseOwnerData set HouseOwnerID = ? ,FirstName = ? ,LastName = ? ,Tel = ? where HouseOwnerID = ?`,[idOwner, firstName, lastName, tel, id]);
        res.json({message:"update successfully"});
    }catch(err){
        console.log(err);
        res.json({});
    }
});

//! UPDATE SECURITYGUARD
updateData.put('/updateSecurityGuard/:id',async(req ,res)=>{
    const {id} = req.params;
    const {firstName, lastName, tel} = req.body;
    try{
        const db = await connection();
        await db.query(`update SecurityGuard set FirstName = ?, LastName = ?, Tel = ? where SecurityGuardID =?`,[firstName, lastName, tel, id]);
        res.json({message:"Update successfully"});
    }catch(err){
        console.log(err);
        res.json({message:"Update failed"});
    }
});

module.exports = updateData;