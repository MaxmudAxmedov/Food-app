import { NavLink, Route, Routes } from 'react-router-dom'
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
        isActive ? "nav__active" : "nav__Link"} to="order-hot" end>
          Hot Dishes
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to={"order-cold"}>
          Cold Dishes
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="order-soup">
          Soup
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="order-grill">
          Grill
        </NavLink>
        </li>
        <li className="nav__item">
        <NavLink className={({isActive}) => 
        isActive ? "nav__active" : "nav__Link"} to="order-appetizer">
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
       <Routes>
        <Route path='order-hot' element={<h2>Hot</h2>} />
       </Routes>
    </div>
  )
}
