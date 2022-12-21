import { NavLink } from "react-router-dom"
import { Search } from "../Search/Search"
import { Select } from "../Select/Select"
import "./header.scss"


export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <h1 className="header__title">
          Jaegar Resto
          </h1>
          <p className="header__text">Tuesday, 2 Feb 2021</p>
        </div>
        <Search/>
      </div>
      <nav className="header__navbar">
       <ul className="nav__list">
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="/house" end>
          Hot Dishes
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="cold">
          Cold Dishes
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="soup">
          Soup
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="grill">
          Grill
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="appetizer">
          Appetizer
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="Dessert">
          Dessert
        </NavLink>
        </li>
       </ul>
      </nav>
      <div className="header__down">
        <h3 className="foots__title">Choose Dishes</h3>
        <Select/>
      </div>
    </header>
  )
}
