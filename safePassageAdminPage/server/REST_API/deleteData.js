const express = require('express');
const deleteData = express.Router();
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

//! DELETE HOUSEOWNER
deleteData.delete('/deleteHouseOwner/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const db = await connection();
        await db.query(`delete from HouseOwnerData where HouseOwnerID = ?`,id)
        res.json({message:"Delete successfully"});
    }catch(err){
        console.log(err);
        res.json({message:"Delete failed"});
    }
});

module.exports = deleteData;


