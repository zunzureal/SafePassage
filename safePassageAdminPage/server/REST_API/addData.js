require('dotenv').config()
const express = require('express');
const addData = express.Router();
const mysql = require('mysql2/promise');
const password = process.env.PASSWORD;
const host = process.env.HOST;
const bcrypt = require("bcrypt")

const connection =()=>{
    return(
        mysql.createConnection({
            user:"admin",
            password:password,
            host:host,
            database:"Villa"
        })
    )
};
/*addData.use(express.json()); */

addData.post('/addNew',async (req,res)=>{
    const { houseNo, idOwner, firstName, lastName, tel } = req.body;
    try{
        const db = await connection();
        await db.query(`insert into HouseOwnerData values(?,?,?,?,?)`,[houseNo, idOwner, firstName, lastName, tel]);
        const hash = await bcrypt.hash(idOwner, 10)
        await db.query("INSERT into HouseOwnerLogin (UserName, Password) values( ?,?)",[ houseNo, hash] )
        res.json({message:"Insert successfully"})
    }catch(err){
        console.log(err)
        res.json({message:"Insert failed"});
    }
});

addData.post('/search_date', async (req, res) => {
    const { start, end } = req.body;
    try {
        const db = await connection();
        const result = await db.query(`
        SELECT *
        FROM HouseOwnerData
        left JOIN HouseOwnerTime ON HouseOwnerData.HouseNumber=HouseOwnerTime.HouseNumber
            WHERE EntryTime BETWEEN ? AND ?
        `, [start, end]);

        res.json(result);
    } catch (err) {
        // Handle errors here
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

addData.post('/search_date_visitor', async (req, res) => {
    const { start, end } = req.body;
    try {
        const db = await connection();
        const result = await db.query(`
        SELECT *
        FROM Visitor
        WHERE EntryTime BETWEEN ? AND ?
        ORDER BY EntryTime DESC`, [start, end]);

        res.json(result);
    } catch (err) {
        // Handle errors here
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = addData;