import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function App() {
  const [messages, Setmessages ] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3003/').then((data)=>{
    console.log(data)
  })
  console.log('hello')


}, [])

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
