const Joi = require("joi");


const buyedProducts = Joi.object().keys({
    name : Joi.string().required(),
    price : Joi.number(),
    id: Joi.string()
})
module.exports = Joi.object().keys({
    userName : Joi.string().max(50).min(3).required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(8).max(100).required(),
    profileImage: Joi.string(),
    buyedProducts : Joi.array().items(buyedProducts)
})


