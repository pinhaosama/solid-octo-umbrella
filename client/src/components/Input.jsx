import $ from 'jquery';
import React from 'react';
import '../styles/input.css';
import FormData from 'form-data';

export default function Input(){

    return(
        <div className='container m-3 p-2 border-1'>
            <form action="http://localhost:5000/post" id='imgForm' method="post" encType="multipart/form-data">
                <textarea className='border-1' id="textupload" name='textupload' type="text" placeholder="Text"></textarea>
                <input type="file" id='imgUpload' name="fileupload"/>
            </form>
            <button className='btn btn-info' onClick={ upload }>Post</button>
        </div>
    );

    function upload() {
        $.ajax({
            type: "POST",
            url: 'http://localhost:5000/post',
            data: new FormData($('#imgForm')[0]),
            processData: false,
            contentType: false,
            success: function (data) {
                alert(data);
            }
        });
    }
}