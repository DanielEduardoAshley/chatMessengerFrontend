import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Chatbox from './components/chatbox';
import Login from './components/login';
import './componentcss/homepage.css'



function App() {
  const [messages, Setmessages ] = useState([]);
  const [newMessage, SetnewMessage] = useState('');
  const [currentUser, SetcurrentUser] = useState({});
  const [userID, SetuserID] = useState(0);
  const [currentMessage, SetcurrentMessage] = useState([]);
  const [loginStatus, SetloginStatus] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:3004/root/').then((response)=>{
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

useEffect(()=>{
  console.log('updated current user to :', currentUser)
}, [currentUser])


  const typeFn=(e)=>{
   SetnewMessage(e.target.value)
   console.log(e.target.value)
}

  const submit=()=>{
  if(!loginStatus){
    window.location.reload(false);

  }else{
   SetcurrentMessage(currentMessage.concat(
    {
     avatar: "https://i.pravatar.cc/300?img=4",
     text_body: newMessage,
     time_posted: 5,
     username: currentUser,

    }

  
   
   ));
console.log('msgid', newMessage, userID)
   axios.post('http://localhost:3004/root/message', 
    {
     text_body : newMessage,
     user_id: userID
    })
       }
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

                  {/* <div className="header2">
                       <div className='textstyle2'>
                           <div className='text2'>ONLINE USERS</div>
                        </div>
                       <div className="column-5"></div>
                  </div> */}
                 
                  
                  

          </div>
</div>
{
  <Login userID={SetuserID} setUser={SetcurrentUser} status={SetloginStatus} number={messages.length + 1}/>
}
</>
  

  );
}

export default App;
