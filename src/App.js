import Sidebar from "./components/Sidebar/Sidebar";

import "./assets/style/style.scss";

import { House } from "./components/House/House";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/house/*" element={<House/>} />
        </Routes>
      
      </div>
      
    </div>
  );
}

export default App;
