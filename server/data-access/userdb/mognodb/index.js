const User = require('../../../db/mongodb/models/user');
const makeUser = require('../../../model/user/index');



const addUser = async(userInfo)=>{ 
  const user = makeUser(userInfo)
  const newUser = {
      name : user.getUserName(),
      email: user.getEmail(),
      password : user.getPassword(),
      buyedProducts: user.getBuyedProducts(),
      profileImage:user.getProfileImage()
  }

  const addedUser = new User(newUser)
  try{
    await addedUser.save()
    return addedUser       
  }catch(err){
    return err
  }
  
}

const deleteUserById = async(_id)=>{
  try{
    const deletedUser = await User.findByIdAndDelete(_id)
    return deletedUser
  }catch(err){
     return err
  }
}

const getUserById = async(_id)=>{
  try{
    const user = await User.findById(_id)
    return user
  }catch(err){
     return err
  }
}

const modifyUserInfo = async(filter,info)=>{
   try{
     const modifiedInfo = await User.findOneAndUpdate(filter,info,{new:true})
     return modifiedInfo;
   }catch(err){
     return err
   }
}
module.exports = {addUser,deleteUserById,getUserById,modifyUserInfo}