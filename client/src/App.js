import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Wall } from "./components/Wall";
import { useState } from "react";

function App() {
    const [currentUser, setCurrentUser] = useState("");
    function handlerUser(user) {
        setCurrentUser(user);
    }
    return (
        <>
            {currentUser === "" ? (
                <Login handlerUser={handlerUser} />
            ) : currentUser === "?" ? (
                <Signup handlerUser={handlerUser} />
            ) : (
                <Wall user={currentUser} />
            )}
        </>
    );
}

export default App;
