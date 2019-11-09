import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Chatbox from './components/chatbox';
import './componentcss/homepage.css'



function App() {
  const [messages, Setmessages ] = useState([]);
  const [newMessage, SetnewMessage] = useState('');
  // const [currentUser, SetcurrentUser] = useState({});
  const [currentMessage, SetcurrentMessage] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3004/').then((response)=>{
       console.log(response.data)
       Setmessages((messages)=>messages.concat(response.data))
  })
    console.log('hello')


}, [])

useEffect(()=>{
if(currentMessage.length){
  console.log('herrro!')
  SetnewMessage('')


}


},[currentMessage])

  const typeFn=(e)=>{
   SetnewMessage(e.target.value)
   console.log(e.target.value)
}

  const submit=()=>{
   SetcurrentMessage(currentMessage.concat({'currentMessage': newMessage }));

  }


  return (<>
  
<div className='contains'>
          <div className="row">
                  <div className="header1">
                        <div className='textstyle1'>
                           <div className='text1'>RECENT TEXT HISTORY</div>
                        </div>
                        <div className="column-7">
                        {
                            messages.length ? messages.map((element,ind)=>{
                                   return  <Chatbox texts={element} key={ind}/> 
                            })
                             : null


                        }

                        {
                            currentMessage.length ? currentMessage.map((element,ind)=>{
                                    return  <Chatbox texts={element} key={ind}/> 
                            })
                             : null

                        }

                      </div>
                      <div className="search">
                            <div className="searchbar">
                                    <input className="inputfield" type="text"  placeholder=" Enter Message"  value={newMessage} onChange={(e)=>typeFn(e)}></input>
                                    <button className="submit" onClick={()=>submit()} > Submit</button>
                                   
                            </div>
                      </div>
                  </div>

                  <div className="header2">
                       <div className='textstyle2'>
                           <div className='text2'>ONLINE USERS</div>
                        </div>
                       <div className="column-5"></div>
                  </div>
                 
                  
                  

          </div>
</div>
</>
  

  );
}

export default App;
