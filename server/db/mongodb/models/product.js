const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new Schema({
    name : String,
    categorie:String,
    price: Number,
    Images:Array,
    numberOfBuyers:Number,

})

module.exports = mongoose.model('Product',productSchema)