import { NavLink, Route, Routes } from 'react-router-dom'
import { Colddish } from '../Colddish/Colddish'
import { Hotdish } from '../HotDish/Hotdish'
import  './products.css'

export const Products = () => {
  return (
    <div className='container-pro'>
      <header className='product__header'>
        <h2 className='product__title'>
        Products Management
        </h2>
        <button className='product__btn'>
        Manage Categories
        </button>
      </header>
      <nav className="header__navbar">
       <ul className="nav__list">
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="/settings/products" end >
          Hot Dishes
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to={"cold"} >
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
        isActive ? "nav__active" : "nav__Link"} to="dessert">
          Dessert
        </NavLink>
        </li>
       </ul>

      </nav>
       <Routes>
        <Route path='/' element={<Hotdish />} />
        <Route path='cold' element={<Colddish />} />
       </Routes>
    </div>
  )
}
