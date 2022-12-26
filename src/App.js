import Sidebar from "./components/Sidebar/Sidebar";

import "./assets/style/style.scss";

import { House } from "./components/House/House";
import { Route, Routes } from "react-router-dom";
import Order from "./page/Orders/Order";
import Payment from "./page/Payment/Payment";
import PageRoute from "./page/PageRoute/PageRoute";


function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/house/*" element={<House />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
