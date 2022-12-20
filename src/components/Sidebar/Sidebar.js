import { Link, NavLink, } from "react-router-dom"
import { Exit, HouseLogo, Logo, Message, Order, Settings, Tost, Vector } from "../../assets/images/icon/Icons"
import "./sidebar.scss"

export default function Sidebar() {
  return (
    <nav className="cite-bar">
    <Link to="/"  className="nav__logo">{<Logo/>}</Link>
    <NavLink to="/" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<HouseLogo />}</span>
    </NavLink>
    <NavLink to="/undefined" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<Vector />}</span>
    </NavLink>
    <NavLink to="/dashboard" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<Tost />}</span>
    </NavLink>
    <NavLink to="/message" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<Message />}</span>
    </NavLink>
    <NavLink to="/call" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<Order />}</span>
    </NavLink>
    <NavLink to="/settings" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<Settings />}</span>
    </NavLink>
    <NavLink to="/exit" className={({isActive}) => isActive? "active" : "nav__link"}>
    <span className="wrap__svg">{<Exit />}</span>
    </NavLink>
    </nav>
    )
  }
  