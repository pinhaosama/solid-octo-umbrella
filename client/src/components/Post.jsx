import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
export function Post({ post, handleLikes }) {
    let formatDate = new Date(parseInt(post.date));
    return (
        <div className="bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] text-white w-1/3 mt-2 p-3 flex flex-col gap-1">
            <h2 className="font-bold uppercase">{post.owner}</h2>
            <h4 className=" font-medium">{`${formatDate.getFullYear()}/${
                formatDate.getMonth() + 1
            }/${formatDate.getDate()}-${formatDate.getHours()}:${formatDate.getMinutes()}`}</h4>
            <p>{post.text}</p>
            {post.img !== "" ? <img src={post.img} alt="" /> : null}

            <div className="flex w-full">
                <span className="text-2xl">
                    <AiOutlineLike
                        onClick={() => handleLikes(post.owner, post.id)}
                    />
                </span>
                <span>{post.likes}</span>
            </div>
        </div>
    );
}
