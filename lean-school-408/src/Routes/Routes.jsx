import Home from "../Components/Home"
import Login from "../Components/Login"
import {Routes,Route} from "react-router-dom"
import Private from "./PrivateRoute"
export default function Router(){
    return <div>
        <Routes>
            <Route path="/" element={<Private><Home/></Private>}>Home</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
        </Routes>
    </div>
}