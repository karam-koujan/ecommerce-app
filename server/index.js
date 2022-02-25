const express = require("express");
const  app = express();
const {dbConnection} = require("./config/key");
const mongoose = require("mongoose")
const PORT = 3000 || process.env.PORT;




mongoose.connect(dbConnection).then(()=>console.log("connect"))

app.listen(PORT,(err)=>err?console.log(err):console.log(`the server is listening on port ${PORT}`))
console.log(dbConnection)