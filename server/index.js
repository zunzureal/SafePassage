require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const mysql = require('mysql2/promise');
const login = require('./API_LOGIN/login');
const visitor = require('./HOUSE_OWNER/visitor');
const grab = require('./HOUSE_OWNER/grab');
const houseOwner = require('./HOUSE_OWNER/houseOwner');
const dbHost = process.env.HOST;
const dbPassword = process.env.PASSWORD;
const app = express();
const bcrypt = require('bcrypt')
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
/* const password = '427517527safepassage'
async function hash (){
    console.log(await(bcrypt.hash(password,10)))
}
hash() */
app.use('/',login);
app.use('/',visitor);
app.use('/', grab);
app.use('/',houseOwner);
app.listen(4444,()=>{
    console.log("server is running")
});

