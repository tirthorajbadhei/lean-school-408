import { createContext, useState } from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false)
    const handleAuth=()=>{
        setIsAuth(!isAuth)
        console.log("Hello")
    }
    return <AuthContext.Provider value={{isAuth,handleAuth}}>
        {children}
    </AuthContext.Provider>
}