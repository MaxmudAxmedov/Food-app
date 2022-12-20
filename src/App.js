import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Order from "./page/Orders/Order";
import "./assets/style/style.scss";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
      <Order />
    </div>
  );
}

export default App;
