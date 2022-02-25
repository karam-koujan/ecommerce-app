const userSchema = require("../user/user-schema");
const validator = require("./index");


describe("validator test",()=>{
   
    it("no error payload pass",()=>{
       const payload = {
           userName : "karam koujan",
           email : "karamkoujandev@gmail.com",
           password : "12345568755",
           buyedProducts : [{name:"pc"}]
       }
       const message = validator(userSchema)(payload) 

       expect(message).toEqual(true)
    })

    it("wrong email payload",()=>{
        const payload = {
            userName : "karam koujan",
            email : "karamkoujandevsagmail.com",
            password : "12345568755",
            buyedProducts : [{name:"pc"}]
        }
        const message = validator(userSchema)(payload) 
        
        expect(message).toEqual({error:'"email" must be a valid email'})
        
    })

})