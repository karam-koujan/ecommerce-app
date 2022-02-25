const Joi = require("joi");


module.exports = Joi.object().keys({
    name : Joi.string().required(),
    categorie: Joi.string().required(),
    price: Joi.number(),
    images:Joi.array(),
    numberOfBuyers:Joi.number()
})