import * as React from "react";
import Image from "next/image";
import Styles from "./style.module.css";
import Shirt from "../../public/assets/images/p1.png";
import Product from "./product";

interface imageInterface{
    src:string,
    alt:string
}
interface productInterface{
image:imageInterface,
name:string,
price:string,
amount:string
}
type ss = string | null
const CheckOut = ()=>{
    const [products,setProducts] = React.useState<productInterface[]>([])
    const [total,setTotal] = React.useState(0);
    React.useEffect(()=>{

     const data:any = localStorage.getItem("products"); 
     const products:productInterface[] = JSON.parse(data);   
     const productsPrice = products.map(product=>Number(product.price.split("").filter(char=>char!=="$").join("")))
     const total =  productsPrice.reduce((acc,price)=>acc+price)
     setProducts(()=>products)
     setTotal(total)
    },[])

   const handleRemoveProduct = (idx:number)=>{
       const restProducts = products.filter((_,index)=> index!==idx)
       const productsPrice = restProducts.map(product=>Number(product.price.split("").filter(char=>char!=="$").join("")))
       const total =  productsPrice.reduce((acc,price)=>acc+price)
       setProducts(restProducts)
       setTotal(total)
       localStorage.setItem("products",JSON.stringify(restProducts))
   } 
  
    if(products.length===0){
        return(
            <div className={Styles.empty__card}>
            <p className={`text-center ${Styles.empty__card__text}`}>Card is empty</p>
        </div>
        )
    }
    return(
        <section className={Styles.shoppingCart}>
            <table className={Styles.shoppingCart__table}>
                <thead className={Styles.shoppingCart__table__head}>
                    <tr>
                        <th className={Styles.shoppingCart__table__head__item}>product</th>
                        <th className={Styles.shoppingCart__table__head__item}>quantity</th>
                        <th className={Styles.shoppingCart__table__head__item}>price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product,index)=><Product name={product.name} setTotal={setTotal} image={product.image} price={product.price} handleRemoveProduct={handleRemoveProduct} key={index} index={index} />)}
                 
                </tbody>
            </table>
           <div className={Styles.total}>
               <div>
                   <p className={Styles.total__header}>total <span className={Styles.total__price}>${total}</span></p>
                   <button className="btn-primary text-bold">
                       pay now
                   </button>
                   </div>
           </div>

        </section>
    )
}

export default CheckOut;