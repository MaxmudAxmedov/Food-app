import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

import "./assets/style/style.scss";

import { House } from "./components/House/House";
import { Dashboard } from "./page/Dashboard/Dashboard";
import { Wrappage } from "./page/WrapPage/Wrappage";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/house/*" element={<House/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/settings/*" element={<Wrappage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
