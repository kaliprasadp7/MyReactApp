function NewChat(props){
    // using props here to understand props better
    return(
        <div class="new-chat-container">
            <div>
                <img height="70" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
            </div>
            <div class="right">
                <div>
                    <h2>{props.name}</h2>
                    <p>Today at {props.time}</p>
                </div>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default NewChat;