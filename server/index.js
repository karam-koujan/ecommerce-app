const express = require("express");
const  app = express();
const {dbConnection,corsOrigin} = require("./config/key");
const mongoose = require("mongoose")
const PORT = 3000 || process.env.PORT;
const bodyParser = require("body-parser");
const { default: helmet } = require("helmet");


const corsOptions = {
    origin:corsOrigin,
    optionsSuccessStatus: 200
}
app.use(bodyParser.json())
app.use(helmet())
app.use(corsOptions)  

mongoose.connect(dbConnection).then(()=>console.log("connect"))


app.listen(PORT,(err)=>err?console.log(err):console.log(`the server is listening on port ${PORT}`))
