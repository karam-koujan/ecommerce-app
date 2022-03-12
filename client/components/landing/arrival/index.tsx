import Styles from "./style.module.css";
import arrivalBg from "../../../public/assets/images/arrival-bg.png";

const Arrival = ()=>{
 return(
     <section className={`flex ${Styles.arrival}`}>
         <div className={`flex ${Styles.arrival__container}`}>
         <div className={Styles.arrival__image__container}>
         <img src={arrivalBg.src} alt="arrival background image"  className={Styles.arrival__image}/>
         </div>         
         <div className={Styles.container}>
         <h2 className={Styles.arrival__title}>
             #new arrivals
         </h2>
         <p className={Styles.arrival__text}>
         Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
         </p>
         <button className={`btn-primary ${Styles.arrival__btn}`}>
             shop now
         </button>
         </div>
         </div>
     </section>
 )
}

export default Arrival;