import { Routes, Route, Link } from "react-router-dom"
import Login from './Login.jsx';
import Signup from "./Signup.jsx";
import Input from './components/input';


export function Main() {
    return(        
        <>
            <Link to="login">Login</Link>
            <br></br>
            <Link to="signup">Signup</Link>
            <br></br>
            <Link to="input">Input</Link>
            <Routes>
                <Route path="login" element={ <Login/> } />
                <Route path="signup" element={ <Signup/> } />
                <Route path="input" element={ <Input/> } />
           </Routes>
        </>
    )
}