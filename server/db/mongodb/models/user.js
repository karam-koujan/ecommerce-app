const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
 name : String,
 profileImage:{
     type:String,
     default:"profileImg"    
 },
 email: String,
 password : String,
 buyedProducts:Array 
})

module.exports = mongoose.model("User",userSchema)