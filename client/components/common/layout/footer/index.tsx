import Link from "next/link";
import Styles from "./style.module.css";



const Footer = ()=>{
   return(
       <footer className={Styles.footer}>
           <div className={`flex ${Styles.footer__container}`}>
               <dl className={`flex ${Styles.description__list}`}>
                   <dt className={Styles.description__title}>Info</dt>
                   <dd className={Styles.description__item}>
                   <b className={Styles.description__item__name}>address: </b><span>
                   28 White tower, Street Name New York City, USA
                   </span>
                   </dd>
                   <dd className={Styles.description__item}>
                   <b className={Styles.description__item__name}>telephone: </b><span>+00 000 000 0000</span>
                   </dd>
                   <dd className={Styles.description__item}>
                   <b className={Styles.description__item__name}>email: </b><span>yourmain@gmail.com</span>
                   </dd>

               </dl>
               <dl className={`flex ${Styles.description__list}`}>
                   <dt className={Styles.description__title}>menu</dt>
                  <dd className={Styles.description__item}>
                   <Link href="/">
                   <a className={Styles.description__item__link}>Home</a>
                   </Link>
                   </dd>
                   <dd className={Styles.description__item}>
                   <Link href="/#about">
                   <a className={Styles.description__item__link}>about</a>
                   </Link>
                   </dd>
                   <dd className={Styles.description__item}>
                   <Link href="/#products">
                   <a className={Styles.description__item__link}>products</a>
                   </Link>
                   </dd>
                   <dd className={Styles.description__item}>
                   <Link href="/contact"> 
                   <a className={Styles.description__item__link}>shop</a>
                   </Link>
                   </dd>
               </dl>
               <dl className={`flex ${Styles.description__list}`}>
                   <dt className={Styles.description__title}>Account</dt>
                   <dd className={Styles.description__item}>
                   <Link href="/">
                   <a className={Styles.description__item__link}>account</a>
                   </Link>
                   </dd>
                   <dd className={Styles.description__item}>
                   <Link href="/">
                   <a className={Styles.description__item__link}>login</a>
                   </Link>
                   </dd>
                   <dd className={Styles.description__item}>
                   <Link href="/#products" >
                   <a className={Styles.description__item__link}>register</a>
                   </Link>
                   </dd>
                   <dd className={Styles.description__item}>
                   <Link href="/contact"> 
                   <a className={Styles.description__item__link}>checkout</a>
                   </Link>
                   </dd>
               </dl>
           </div>
       </footer>
   )
}

export default Footer ;