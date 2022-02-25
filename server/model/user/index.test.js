const makeUser = require("./index");

describe("test user model",()=>{
    it("error message",()=>{
        const payload = {
         userName : "karam koujan",
         email : "karamkoujandevgmail.com",
         password : "12345568755",
         buyedProducts : [{name:"pc"}]
     }
      expect(makeUser(payload)).toEqual("error")
  })
  it("get userName",()=>{
    const payload = {
        userName : "karam koujan",
        email : "karamkoujandev@gmail.com",
        password : "12345568755",
        buyedProducts : [{name:"pc"}]
    }
    expect(makeUser(payload).getUserName()).toEqual("karam koujan")
  })
  it("get email",()=>{
    const payload = {
        userName : "karam koujan",
        email : "karamkoujandev@gmail.com",
        password : "12345568755",
        buyedProducts : [{name:"pc"}]
    }
    expect(makeUser(payload).getEmail()).toEqual("karamkoujandev@gmail.com")
  })

  it("get password",()=>{
    const payload = {
        userName : "karam koujan",
        email : "karamkoujandev@gmail.com",
        password : "12345568755",
        buyedProducts : [{name:"pc"}]
    }
    expect(makeUser(payload).getPassword()).toEqual("12345568755")
  })

  it("get password",()=>{
    const payload = {
        userName : "karam koujan",
        email : "karamkoujandev@gmail.com",
        password : "12345568755",
        buyedProducts : [{name:"pc"}]
    }
    expect(makeUser(payload).getBuyedProducts()).toEqual([{name:"pc"}])
  })

})