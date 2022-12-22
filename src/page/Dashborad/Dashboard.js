import { Book, Content, Dollar, Down, Top } from "../../assets/images/icon/Icons"
import { MainDown } from "../../components/MainDown/MainDown"
import { MainTop } from "../../components/MainTop/MainTop"
import { MiniCard } from "../../components/MiniCard/MiniCard"
import "./dashboard.css"

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
        <MainDown img={Book}/>
        <ul className="report__list">

        </ul>
      </div>
    </>
  )
}
