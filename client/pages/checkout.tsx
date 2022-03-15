import { NextPage } from "next";
import CheckOut from "../components/checkout";
import Layout from "../components/common/layout";
import { ProductContext } from "../context/productContext";



const ShoppingCard : NextPage = ()=>{
  return(
    <ProductContext>
    <Layout>
           <CheckOut/>
    </Layout>
    </ProductContext>
  )
}
export default ShoppingCard;