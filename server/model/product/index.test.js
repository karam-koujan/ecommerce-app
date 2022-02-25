const makeProduct = require("./index");


describe("test makeProduct",()=>{
   it("it gives an error",()=>{
       const payload = {
           name : 1,
           categorie:"technologie",
           price: 400,
           images:["image1","image2"],
           numberOfBuyers:10
       }
       expect(makeProduct(payload)).toEqual("error")
   })

   const payload = {
       name :"iphone",
       categorie:"technologie",
       price: 400,
       images:["image1","image2"],
       numberOfBuyers:10
   }
   const product = makeProduct(payload)
   it("get product name" ,()=>{
    expect(product.getName()).toEqual("iphone")
   })
   it("get product price" ,()=>{
    expect(product.getPrice()).toEqual(400)
   })
   it("get product categorie" ,()=>{
    expect(product.getCategorie()).toEqual("technologie")
   })
   it("get product images" ,()=>{
    expect(product.getImages()).toEqual(["image1","image2"])
   })
   it("get product numberOfBuyers" ,()=>{
    expect(product.getNumberOfBuyers()).toEqual(10)
   })
})