import React  from 'react';
import '../componentcss/chatbox.css'

function Chatbox(props){


    return(
        <div className="chatcontainer">
        <img src="/w3images/bandmember.jpg" alt="Avatar"></img>
        <p>{props.texts.text_body}</p>
        <span className="time-right">11:00</span>
      </div>    
    )
}


export default Chatbox;