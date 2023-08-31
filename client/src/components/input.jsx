import $ from 'jquery';
import React from 'react';
import '../styles/input.css';

export default function Input(){

    return(
        <div className='container m-3 p-2 border-1'>
            <textarea className='border-1' id="textupload" name='textupload' type="text" placeholder="Text"></textarea>
            <form action="http://localhost:5000/post" method="post" encType="multipart/form-data">
                <input type="file" id='imgUpload' name="fileupload"/>
                <br/>
                <input className='d-none' id='submitImg' type="submit"/>
            </form>
            <button className='btn btn-info' onClick={ upload }>Post</button>
        </div>
    );

    function upload() {
        var txt = $('#textupload').val();
        console.log(txt);
        $.ajax({
            traditional: true,
            url: "http://localhost:5000/post",
            type: 'POST',
            data: JSON.stringify({'content':txt}),
            headers: {
                "task": "text",
                "Content-type":"application/json"
            },
            success: function (response) {
                alert(response);
            },
            error: function (error) {
                console.error("Error:", error);
            }
        });
        setTimeout(() => {
            if($('#imgUpload').val() != ''){
                $('#submitImg').trigger("click");
            }
        }, 1000)
        
    }
}