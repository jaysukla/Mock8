const express = require('express');
const {connection,User,Product} = require('./model/model')
var jwt = require('jsonwebtoken');
var cors = require('cors')
const bcrypt = require('bcrypt');
const app = express();
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send({"msg":"Api is Active"})
})

//signup




app.listen(8080,()=>{

try {
    connection;

console.log("Db connection successfull")


} catch (error) {
    console.log("err from db connection ",err)
}

    console.log("Listning to port 8080")
})