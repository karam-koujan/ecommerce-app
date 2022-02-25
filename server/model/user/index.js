const userSchema = require("./user-schema")
const userValidator = require("../validator/")(userSchema);
const buildUser = require("./user")


const makeUser = buildUser(userValidator)


module.exports = makeUser




