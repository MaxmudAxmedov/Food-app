import { Route, Routes } from "react-router-dom"
import { Header } from "../Header/Header"
import Main from "../Main/Main"
import PageRoute from "../../page/PageRoute/PageRoute";
import Ordered from "../../page/Ordered/Ordered";

export const House = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/"   element={<Main/>} />
        <Route path="/dashboard" element={<Ordered />}></Route>
      </Routes>

      {/* <Order/> */}

      <PageRoute />
      
    </div>
  )
}
