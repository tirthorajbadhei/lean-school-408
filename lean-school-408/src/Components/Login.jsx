import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import "./Login.css"

export default function Login(){
  const {isAuth,handleAuth}=useContext(AuthContext)
  if(isAuth){
    return <Navigate to={"/"}/>
  }
  
    return <div style={{width: "40%",margin:"auto"}}>
        <form action="action_page.php" method="post"/>
  <div className="imgcontainer">
    
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button onClick={handleAuth} type="submit" style={{backgroundColor:"#4b5666 "}}>Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{backgroundColor: "#f1f1f1"}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span className="psw">Forgot <p>password?</p></span>
  </div>
<form/>
    </div>
}