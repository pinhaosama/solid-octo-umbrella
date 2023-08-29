export default function Input(){
    return(
        <form id="postInput" class="input-group">
            <div id="inputs">
                <input type="text" class="form-control" id="title" placeholder="Title" />
                <textarea class="form-control" id="post" placeholder="Text"></textarea>
                <input type="file" class="form-control" id="img" placeholder="Title" />
            </div>
            <button class="btn btn-outline-secondary" id="postButton" type="button">Post</button>
        </form>
    );
}