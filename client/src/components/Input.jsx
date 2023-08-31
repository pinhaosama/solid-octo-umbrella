import $ from "jquery";
import React from "react";
import "../styles/input.css";
import FormData from "form-data";

export default function Input({ user }) {
    return (
        <div className="w-1/3 flex flex-col gap-1">
            <form
                action="http://localhost:5000/post"
                id="imgForm"
                method="post"
                encType="multipart/form-data"
                className="flex flex-col gap-1"
            >
                <textarea
                    className="resize-none rounded-md px-2"
                    id="textupload"
                    name="textupload"
                    type="text"
                    placeholder="What are you thinking??......."
                ></textarea>
                <input type="hidden" name="user" value={user} />
                <input
                    type="file"
                    id="imgUpload"
                    name="fileupload"
                    className="text-white"
                />
            </form>
            <button
                className="bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] text-white rounded-md"
                onClick={upload}
            >
                Post
            </button>
        </div>
    );

    function upload() {
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/post",
            data: new FormData($("#imgForm")[0]),
            processData: false,
            contentType: false,
            success: function (data) {
                alert(data);
            },
        });
    }
}
