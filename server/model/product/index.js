const productSchema = require("./product-schema");
const productValidation = require("../validator")(productSchema);
const buildProduct = require("./product");
const makeProduct = buildProduct(productValidation)


module.exports = makeProduct; 