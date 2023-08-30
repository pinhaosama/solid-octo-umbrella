import { Routes, Route, Link } from "react-router-dom"
import Login from './Login.jsx';
import Signup from "./Signup.jsx";


export function Main() {
    return(        
        <>
            <Link to="login">Login</Link>
            <br></br>
            <Link to="signup">Signup</Link>
            <Routes>
                <Route path="login" element={ <Login/> } />
                <Route path="signup" element={ <Signup/> } />
           </Routes>
        </>
    )
}