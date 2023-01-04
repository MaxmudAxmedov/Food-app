import { Route, Routes } from "react-router-dom"
import { Products } from "../Products/Products"
import { Settings } from "../Settings/Settings"
import "./wrappage.css"

export const Wrappage = () => {
  return (
    <>
      <header className="pro-header">
        <h2 className="pro__title">Settings</h2>
      </header>
      <div className="pro__wrap">
      <Settings />
      <Routes>
        <Route path="products/*" element={<Products />} />
      </Routes>
      </div>
    </>
  )
}
