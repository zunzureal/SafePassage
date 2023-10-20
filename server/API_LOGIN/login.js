require("dotenv").config();
const express = require("express");
const login = express.Router();
const jwt = require("jsonwebtoken");
const mysql = require("mysql2/promise");
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;
const bcrypt = require('bcrypt')
const secret = process.env.SECRET_KEY;
const connection = async () => {
    const db = await mysql.createConnection({
        connectionLimit: 10,
        user: "admin",
        host: dbHost,
        password: dbPassword,
        database: "testVilla",
    });
    return db;
};
login.post("/apis/login", async (req, res) => {
    try {
        const { username,password} = req.body;
        const db =await connection();
        const [result] =await db.query('select * from AccountForOwner where UserName = ?',username);
        const data = result[0];
        if(data){
            const comPassword = await bcrypt.compare(password,data.Password)
            if(comPassword){
                const token = jwt.sign(username,secret);
                return res.json({message:"Login successfully",token:token,houseNo:username,password:password});
            }
            else{
                return res.json({message:"Login failed"})
            }
        }else{
            return res.json({message:"Login failed"})
        }
    } catch (err) {
        console.log(err);
        res.json({message:"Login failed"})
    }
});
login.post('/securityLogin', async (req, res)=>{
    try{
        const {username, password} = req.body;
        const db = await connection();
        const [result] = await db.query(`select * from AccountForStaff where Username = ?`,username)
        if(result){
            const comPassword = await bcrypt.compare(password,result[0].Password);
            if(comPassword){
                const token = jwt.sign(username,secret);
                return res.json({message:"Login successfully", token:token})
            }else{
                return res.json({message:"Login failed"})
            }
        }else{
            return res.json({message:"Login failed"})
        }
    }catch(err){
        console.log(err)
        res.json({message:"Login failed"})
    }
});
module.exports = login;
