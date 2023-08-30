import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Wall } from "./components/Wall";
import { useState } from "react";

function App() {
    const [currentUser, setCurrentUser] = useState("");
    return <>{currentUser !== "" ? <Wall /> : <Login />}</>;
}

export default App;
