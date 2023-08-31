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
        <div className="min-h-screen bg-neutral-800">
            {currentUser === "" ? (
                <Login handlerUser={handlerUser} />
            ) : currentUser === "?" ? (
                <Signup handlerUser={handlerUser} />
            ) : (
                <Wall user={currentUser} />
            )}
        </div>
    );
}

export default App;
