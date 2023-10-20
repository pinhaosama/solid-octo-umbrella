import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
export function Post({ post, handleLikes, handleDislikes }) {
    let formatDate = new Date(parseInt(post.date));
    return (
        <div className="bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] text-white mt-2 p-3 flex flex-col gap-1">
            <h2 className="font-bold uppercase">{post.owner}</h2>
            <h4 className=" font-medium">{`${formatDate.getFullYear()}/${
                formatDate.getMonth() + 1
            }/${formatDate.getDate()}-${formatDate.getHours()}:${formatDate.getMinutes()}`}</h4>
            <p>{post.text}</p>
            {post.img !== "" ? (
                <img
                    src={`http://10.0.0.184:5000/data/imgs/${post.img}`}
                    alt="post"
                />
            ) : null}

            <div className="flex w-full gap-2 border-t pt-2">
                <span className="text-2xl">
                    <AiOutlineLike
                        onClick={() => handleLikes(post.owner, post.id)}
                        className="cursor-pointer"
                    />
                </span>
                <span className="text-2xl">
                    <AiOutlineDislike
                        onClick={() => handleDislikes(post.owner, post.id)}
                        className="cursor-pointer"
                    />
                </span>
                <span>{post.likes}</span>
            </div>
        </div>
    );
}
