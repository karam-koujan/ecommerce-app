import Image from "next/image";
import Style from "./style.module.css";


interface imageInterface{
        src:string,
        alt:string
}
interface props{
    image:imageInterface,
    name:string,
    price:string
}

const Product = ({image,name,price}:props)=>{
    return(
        <div className={Style.product}>
            <div className={Style.product__container}>
            <div className={Style.product__image__container}>
            <Image src={image.src} alt={image.alt} className={Style.product__image} width={120} height={150}/>
            </div>
            <div className={`flex ${Style.product__price__container}`}>
                <p className={Style.product__name}>
                    {name}
                </p>
                <p className={Style.product__price}>
                    {price}
                </p>
            </div>
            
            <div className={Style.product__btn__container}>
                <div className={Style["product__btn__container--opacity"]}></div>
                <div className={Style["product__btn__container--no-opacity"]}>
                <button className={`btn-primary-round ${Style.product__btn} `}>add to cart</button>
                <button className={`btn-secondary-round ${Style.product__btn}`}>buy now</button>
               </div>
            </div>
            
            
            </div>
        </div>
    )
}

export default Product;