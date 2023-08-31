import { Post } from "./Post";
import { useState, useEffect } from "react";
import Input from "./Input";
import { Rightbar } from "./Rightbar";
import { Leftbar } from "./Leftbar";
import { Navbar } from "./Navbar";

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
    function handleDislikes(name, numberPost) {
        fetch("http://localhost:5000/", {
            method: "PUT",
            headers: { task: "dislike" },
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
        <div className="">
            <Navbar />
            <div className="bg-neutral-800 w-full flex flex-col items-center gap-1 sticky top-0">
                <h1 className="text-white text-5xl">{user}</h1>
                <Input user={user} />
                <span className="w-3/4 border-b border-[#ee7724] my-3"></span>
            </div>
            <div className="flex gap-1 static justify-center">
                <Leftbar upDate={upDate} />
                <div className="flex-grow-0 w-2/4 static">
                    {posts.map((post) => {
                        return (
                            <Post
                                post={post}
                                key={post.date}
                                handleLikes={handleLikes}
                                handleDislikes={handleDislikes}
                            />
                        );
                    })}
                </div>
                <Rightbar />
            </div>
        </div>
    );
}
