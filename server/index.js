require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const mysql = require('mysql2/promise');
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;

const app = express();

app.use((req,res,next)=>{
    next()
});
app.use(express.json());
app.use(cors({}));

const connection = async ()=>{
    const db = await mysql.createConnection({
        user:"admin",
        host:dbHost,
        password:dbPassword,
        database:"Villa"
    })
    return db;
};

app.get('/getData',async (req, res)=>{
    
    const db = await connection();
    const result = await db.query('select * from houseOwner')
    const data = result[0]
    res.json(data)
});


app.listen(4444,()=>{
    console.log("server is running")
});

