import $ from 'jquery';
import axios from 'axios';
import FormData from 'form-data';
import React from 'react';

export default function Input(){

    return(
        <div>
            <textarea id="textupload" name='textupload' type="text" placeholder="Text"></textarea>
            <form action="http://localhost:5000/post" method="post" encType="multipart/form-data">
                <input type="file" id='imgUpload' name="fileupload"/>
                <br/>
                <input id='submitImg' type="submit"/>
            </form>
            <button onClick={ upload }></button>
        </div>
    );

    async function upload() {
        var txt = $('#textupload').val();
        console.log(txt);
        $.ajax({
            traditional: true,
            url: "http://localhost:5000/post",
            type: 'POST',
            data: JSON.stringify(txt),
            headers: {
                "task": "text",
                "Content-Type": "text/xml"
            },
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.error("Error:", error);
            }
        });
        if($('#imgUpload').val() != ''){
            $('#submitImg').click();
        }
    }
}