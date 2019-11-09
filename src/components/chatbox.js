import React  from 'react';
import '../componentcss/chatbox.css'

function Chatbox(props){


    return(
        <div className='chatrow'>
            <div className='chatcolumn1 image'>
            </div>               

             <div className="chatcolumn2">
                    <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <span className="info"> {props.texts.username || 'sam'} {props.texts.currentMessage} | 11:00</span>
            </div>   
      </div> 
    )
}


export default Chatbox;