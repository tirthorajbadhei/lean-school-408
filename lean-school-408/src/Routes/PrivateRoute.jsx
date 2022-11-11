import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export default function Private({children}){
   
    const {isAuth}=useContext(AuthContext)
    if(!isAuth){
        return <Navigate to={"/login"}/>
    }
    return children
}