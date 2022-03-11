import Styles from "./style.module.css";



const Hero = ()=>{
    return(
   <section className={Styles.hero}>
    <div className={Styles.introduction}>
        <h1 className={Styles.introduction__title}>
            <span className={Styles["introduction__title--firstPart"]}>Sale 20% Off</span>
            <br/>
            <span>on everything</span>
        </h1>
        <p className={Styles.introduction__text}>
        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
        </p>
        <button className="btn-primary text-bold">shop now</button>
    </div>
   </section>
    )
}

export default Hero;