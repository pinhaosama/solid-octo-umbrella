import { Post } from "./Post";
import { useState, useEffect } from "react";

export function Wall({ user }) {
    const [refresh, setRefresh] = useState(0);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/", {
            method: "POST",
            headers: { task: "getPost" },
            body: JSON.stringify({
                username: user,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((error) => {
                console.log("Somethig is wrong with server", error);
            });
    }, [refresh]);
    function upDate() {
        setRefresh((prev) => prev + 1);
    }
    function handleLikes(name, numberPost) {
        fetch("http://localhost:5000/", {
            method: "PUT",
            headers: { task: "like" },
            body: JSON.stringify({
                username: name,
                numberpost: numberPost,
            }),
        })
            .then((response) => {
                upDate();
                //return response.json();
            })
            .catch((error) => {
                console.log("Somethig is wrong with server", error);
            });
    }
    return (
        <div className="bg-gray-100 w-full flex flex-col items-center">
            <button onClick={upDate}>Update</button>
            {posts.map((post) => {
                return (
                    <Post
                        post={post}
                        key={post.date}
                        handleLikes={handleLikes}
                    />
                );
            })}
        </div>
    );
}
