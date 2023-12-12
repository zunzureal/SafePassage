require('dotenv').config();
const express = require('express');
const getData = express.Router();
const password = process.env.PASSWORD;
const host = process.env.HOST;
const mysql = require('mysql2/promise');

const connection = () => {
    return (
        mysql.createConnection({
            user: 'admin',
            password: password,
            host: host,
            database: 'Villa'
        })
    )
}

getData.get('/getData', async (req, res) => {
    const db = await connection();
    try {
        const [houseOwner] = await db.query('SELECT COUNT(HouseOwnerID) AS houseOwner FROM HouseOwnerData');
        const [visitor] = await db.query('SELECT COUNT(Password) AS Visitor FROM Visitor WHERE MONTH(EntryTime) = MONTH(NOW()) AND YEAR(EntryTime) = YEAR(NOW())');
        const [securityGuard] = await db.query('SELECT COUNT(SecurityGuardID) AS securityGuard FROM SecurityGuard');
        res.json({ visitor: visitor[0].Visitor, houseOwner: houseOwner[0].houseOwner, securityGuard: securityGuard[0].securityGuard });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Close the database connection
        if (db) {
            await db.end();
        }
    }
});


//! Get all data houseOwner, securityGuard, visitor
getData.get('/getAllData', async (req, res) => {
    const db = await connection();
    const [houseOwner] = await db.query(`select * from HouseOwnerData`);
    const [securityGuard] = await db.query(`select * from SecurityGuard`);
    const [visitor] = await db.query(`select * from Visitor ORDER BY EntryTime desc `);
    console.log(visitor[0])
    res.json({ houseOwner, securityGuard, visitor });
});

getData.get('/getLatest', async (req, res) => {
    const db = await connection();
    const [houseOwner] = await db.query(`select * from HouseOwnerTime ORDER BY EntryTime DESC LIMIT 5`);
    const [visitor] = await db.query(`select * from Visitor ORDER BY EntryTime desc LIMIT 5`);
    res.json({ houseOwner, visitor });
});

//! Security who works that current time.
getData.get('/getSecurity', async (req, res) => {
    try {
        const db = await connection();
        const [result] = await db.query(`
        SELECT s.SecurityGuardID, s.FirstName, s.LastName, s.Tel,w.EntryTime,w.ExitTime
FROM SecurityGuard s
INNER JOIN WorkName w ON s.SecurityGuardID = w.SeG_ID
WHERE DATE_ADD(NOW(), INTERVAL 7 HOUR) >= STR_TO_DATE(w.EntryTime, '%Y-%m-%d %H:%i:%s') AND DATE_ADD(NOW(), INTERVAL 7 HOUR) <= STR_TO_DATE(w.ExitTime, '%Y-%m-%d %H:%i:%s')
;
    `)
        res.json(result);
    } catch (err) {
        console.log(err)
    }
});


getData.post("/getDataById", async (req, res) => {
    try {
        const { _id } = req.body;
        const db = await connection();
        const [id] = await db.query(`select * from HouseOwnerData where HouseOwnerID = ? or HouseNumber = ?`, [_id, _id]);
        /* const [houseNo] = await db.query(`select * from HouseOwner where HouseNumber = ?`,_id); */
        if (id) {
            return res.json(id);
        } else {
            return res.json({ message: "There is no data." })
        }
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

getData.get("/getDataByPrefix", async (req, res) => {
    try {
        const { prefix } = req.query;
        const db = await connection();
        const [result] = await db.query(`SELECT * FROM HouseOwnerData WHERE HouseNumber LIKE ? OR HouseOwnerID LIKE ? OR FirstName LIKE ? OR LastName LIKE ? OR Tel LIKE ?`, [`${prefix}%`, `${prefix}%`, `${prefix}%`, `${prefix}%`, `${prefix}%`]);
        if (result.length > 0) {
            return res.json(result);
        } else {
            return res.json({ message: "There is no data." });
        }
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});



getData.get("/getHouseOwnerById/:id", async (req, res) => {
    try {
        const db = await connection()
        const { id } = req.params;
        const [result] = await db.query(`select * from HouseOwnerData where HouseOwnerID = '${id}'`);
        console.log(result)
        if (result) {
            return res.json(result[0]);
        } else {
            return res.json({ message: "There is no user" })
        }
    } catch (err) {
        console.log(err);
        res.json({ message: "There is no user" })
    }
});

getData.get("/getSecurityGuardById/:id", async (req, res) => {
    try {
        const db = await connection()
        const { id } = req.params;
        const [result] = await db.query(`select * from SecurityGuard where SecurityGuardID = '${id}'`);
        if (result) {
            return res.json(result[0]);
        } else {
            return res.json({ message: "There is no user" })
        }
    } catch (err) {
        console.log(err);
        res.json({ message: "There is no user" })
    }
});

getData.post('/getDataFromTime', async (req, res) => {

});
module.exports = getData;