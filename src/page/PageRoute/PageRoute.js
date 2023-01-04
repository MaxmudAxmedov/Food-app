import {Route, Routes} from "react-router-dom";
import Payment from "../Payment/Payment";
import Order from "../Orders/Order";
import Main from "../../components/Main/Main";

export default function PageRoute() {
    return <>
        <Main />
        <Routes>
            <Route path='/' element={<Order />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
        </Routes>
    </>
}