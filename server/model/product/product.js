

const buildProduct = (userValidator)=>
{
  return ({name,categorie,price,images,numberOfBuyers})=>{
      const {error} = userValidator({name,categorie,price,images,numberOfBuyers})
      if(error) return "error"
     
      return{
          getName:()=>name,
          getCategorie:()=>categorie,
          getPrice:()=>price,
          getImages:()=>images,
          getNumberOfBuyers:()=>numberOfBuyers
      }
  }
}
module.exports = buildProduct;