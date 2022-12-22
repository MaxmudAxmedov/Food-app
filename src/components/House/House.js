import { Route, Routes } from "react-router-dom"
import Order from "../../page/Orders/Order"
import { Header } from "../Header/Header"
import Main from "../Main/Main"


export const House = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<Main/>} />
      </Routes>
      <Order/>
    </div>
  )
}
