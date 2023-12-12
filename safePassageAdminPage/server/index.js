require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const login = require('./LOGIN/login');
const getData = require('./REST_API/getData');
const addData = require('./REST_API/addData');
const updateData = require('./REST_API/updateData');
const deleteData = require('./REST_API/deleteData');

app.use(express.json());
app.use(cors({

}));

/* const password = ''
async function hash (){
    console.log(await (bcrypt.hash(password,10)))
}
hash() */

app.use('/apis',login);
app.use('/apis',getData);
//app.use('/',getSecurity);
app.use('/apis',addData);
app.use('/apis',updateData);
app.use('/apis',deleteData)
app.listen(1510,()=>{
    console.log('server is running')
});