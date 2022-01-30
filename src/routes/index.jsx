import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default RoutesApp