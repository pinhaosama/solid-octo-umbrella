import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Input from "./components/input";
import { Wall } from "./components/Wall";
import { useState } from "react";

function App() {
    const [currentUser, setCurrentUser] = useState("");
    return <>{currentUser !== "" ? <Wall /> : <Login />}</>;
    //return(<Input />);
}

export default App;
