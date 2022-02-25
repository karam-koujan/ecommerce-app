const Joi = require("joi");


const validator = (schema)=>{
 return(payload)=>{
     const {error} = schema.validate(payload) 
     if(error != undefined){
        const message = error.details.map(el => el.message).join('\n')
        return {
          error: message
        }
    }
    return true ;
 }
}
module.exports = validator

