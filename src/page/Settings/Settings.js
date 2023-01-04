import { NavLink, Route, Routes } from "react-router-dom"
import {MinHeard,Restaurant,Management,Notifications,Security,About} from "../../assets/images/icon/Icons"
import "./settings.css"

export const Settings = () => {
  return (
    <>
    <setHeard />
      
        <div className="set__inner">
        <nav className="settins__list">
          <NavLink className={({isActive}) => isActive? "active__link" : "set__link"} to="appereance">
            {<MinHeard />}
            <div>
              <h4 className="set__title">Appereance</h4>
              <p className="set__text">Dark and Light mode, Font size </p>
            </div>
          </NavLink>

          <NavLink className={({isActive}) => isActive? "active__link" : "set__link"} to="restaurant">
            {<Restaurant />}
            <div>
              <h4 className="set__title">Your Restaurant</h4>
              <p className="set__text">Dark and Light mode, Font size </p>
            </div>
          </NavLink>

          <NavLink className={({isActive}) => isActive? "active__link" : "set__link"} to="products" end>
            {<Management />}
            <div>
              <h4 className="set__title">Products Management</h4>
              <p className="set__text">Manage your product, pricing, etc </p>
            </div>
          </NavLink>

          <NavLink className={({isActive}) => isActive? "active__link" : "set__link"} to="notifications">
            {<Notifications />}
            <div>
              <h4 className="set__title">Notifications</h4>
              <p className="set__text">Customize your notifications </p>
            </div>
          </NavLink>

          <NavLink className={({isActive}) => isActive? "active__link" : "set__link"} to="security">
            {<Security />}
            <div>
              <h4 className="set__title">Security</h4>
              <p className="set__text">Configure Password, PIN, etc </p>
            </div>
          </NavLink>

          <NavLink className={({isActive}) => isActive? "active__link" : "set__link"} to="about">
            {<About />}
            <div>
              <h4 className="set__title">About Us</h4>
              <p className="set__text">Find out more about Posly </p>
            </div>
          </NavLink>
        </nav>
        <div className="setWrapper">
          <Routes>
            <Route path="appereance" />
          </Routes>
        </div>
        </div>
    </>
  )
}
