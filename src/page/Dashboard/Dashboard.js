import { Book, Content, Dollar, Down, Top } from "../../assets/images/icon/Icons"
import { MainDown } from "../../components/MainDown/MainDown"
import { MainTop } from "../../components/MainTop/MainTop"
import { MiniCard } from "../../components/MiniCard/MiniCard"
import Eren from "../../assets/images/img/Eren.svg"
import Reiner from "../../assets/images/img/Reiner.svg"
import Levi from "../../assets/images/img/Levi.svg"
import Historia from "../../assets/images/img/Historia.svg"
import Hamji from "../../assets/images/img/Hanji.svg"
import "./dashboard.css"
import Ordered from "../Ordered/Ordered"

export const Dashboard = () => {
  return (
    <>
      <header className="header">
          <h1 className="header__title">
          Dashboard
          </h1>
          
          <p className="header__text">Tuesday 2 Feb, 2021</p>
      </header>
      <ul className="card__list">
        <MiniCard img={<Dollar/>} top={<Top/>} count={"$10,243.00"} text={"Total Revenue"} bgColor={{color: '#50D1AA'}} point={"+32.40%"} />
        <MiniCard img={<Book/>} top={<Down/>} count={"23,456"} text={"Total Dish Ordered"} bgColor={{color: '#FF7CA3'}}point={"-12.40%"} />
        <MiniCard img={<Content/>} top={<Top/>} count={"1,234"} text={"Total Customer"} bgColor={{color: '#50D1AA'}}point={"+2.40%"} />
        <MiniCard img={<Book/>} top={<Down/>} count={"444,53"} text={"Total Ordered"} bgColor={{color: '#FF7CA3'}}point={"-20.40%"} />
      </ul>
      <div className="report">
        <MainTop/>
        <ul className="report__list">
        <MainDown img={Eren} title="Eren Jaegar" text="Spicy seasoned seafood noodles" count="$125" 
        btnText="Completed" bgColor={{color:"#50D1AA", backgroundColor:"#6be2be3d"}} />
        <MainDown img={Reiner} title="Reiner Braunn" text="Salted Pasta with mushroom sauce" count="$145" 
        btnText="Preparing" bgColor={{color:"#9290FE", backgroundColor:"#9290fe33"}} />
        <MainDown img={Levi} title="Levi Ackerman" text="Beef dumpling in hot and sour soup" count="$105" 
        btnText="Pending" bgColor={{color:"#FFB572", backgroundColor:"#ffb57233"}} />
        <MainDown img={Historia} title="Historia Reiss" text="Hot spicy fried rice with omelet" count="$450" 
        btnText="Completed" bgColor={{color:"#50D1AA", backgroundColor:"#6be2be3d"}} />
        <MainDown img={Hamji} title="Hanji Zoe" text="Hot spicy fried rice with omelet" count="$245" 
        btnText="Completed" bgColor={{color:"#50D1AA", backgroundColor:"#6be2be3d"}} />

        </ul>
      </div>

      <Ordered />
    </>
  )
}
