require('dotenv').config();
const express = require('express');
const login = express.Router();
const password = process.env.PASSWORD;
const host = process.env.HOST;
const secret = process.env.SECRET_KEY;
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connection = ()=>{
    return(
        mysql.createConnection({
            user:'admin',
            password:password,
            host:host,
            database:'testVilla'
        })
    )
}

login.post('/apis/login',async (req,res)=>{
    try{
        const {username,password} =req.body;
        const db = await connection()
        const [result] = await db.query('select *from admin where username = ?',username);
        const data = result[0];
        const comPassword = await bcrypt.compare(password,data.password);
        if(!comPassword){
            res.json({message:"Login failed"})
        }else{
            const token = jwt.sign({username},secret,{expiresIn: '1m'});
            res.json({message:"Login successfully",token:token})
        }
    }catch(err){
        console.log(err);
        res.json({message:"Login failed"})
    }
});




module.exports = login;