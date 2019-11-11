import React  from 'react';
import '../componentcss/chatbox.css'

function Chatbox(props){


    return(
        <div className='chatrow'>
            <div className='chatcolumn1'>
            <img src={props.texts.avatar} alt='Avatar'className='image'></img>
            </div>               

             <div className="chatcolumn2">
                    <p className='paragraph'>{props.texts.text_body} </p>
                    <span className="info"> {props.texts.username || 'sam'} {props.texts.currentMessage} | {props.texts.time_posted}</span>
            </div>   
      </div> 
    )
}


export default Chatbox;