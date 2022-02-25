
const buildUser = (userValidator)=>
{
  return ({userName,email,password,buyedProducts})=>{
      const {error} = userValidator({userName,email,password,buyedProducts})
      if(error) return "error"
     
      return{
          getUserName:()=>userName,
          getEmail:()=>email,
          getPassword:()=>password,
          getBuyedProducts:()=>buyedProducts
      }
  }
}
module.exports = buildUser;

