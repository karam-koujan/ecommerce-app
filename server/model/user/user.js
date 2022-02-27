
const buildUser = (userValidator)=>
{
  return ({userName,email,password,buyedProducts,profileImage})=>{
      const {error} = userValidator({userName,email,password,buyedProducts,profileImage})
      if(error) return "error"
     
      return{
          getUserName:()=>userName,
          getEmail:()=>email,
          getPassword:()=>password,
          getBuyedProducts:()=>buyedProducts,
          getProfileImage:()=>profileImage
      }
  }
}
module.exports = buildUser;

