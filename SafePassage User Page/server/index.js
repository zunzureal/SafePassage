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
const bcrypt = require('bcrypt');
const goodsDelivery = require('./security_guard/goodsDelivery');
app.use((req,res,next)=>{
    next()
});
app.use(express.json());
app.use(cors({}));

/* const password = '1122334455667'
async function hash (){
    console.log(await(bcrypt.hash(password,10)))
}
hash() */
app.use('/',login);
app.use('/',visitor);
app.use('/', grab);
app.use('/',houseOwner);
app.use('/', goodsDelivery)
app.listen(4444,()=>{
    console.log("server is running")
});

