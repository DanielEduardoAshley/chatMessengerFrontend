import React, { useState } from 'react';

// import  Button from 'react-bootstrap/Button';
import  Modal from 'react-bootstrap/Modal';



function Login(props) {
    const [show, setShow] = useState(true);
    const [newUser, SetnewUser] = useState('');
  
    const handleClose = () => setShow(false);

    const setUse=(e)=>{
        SetnewUser(e.target.value)
        console.log(newUser)
    }

    const setUser=()=>{
        props.setUser(newUser)
        props.status(true)
        
        handleClose()

    }
  
    return (
      <>
    
                      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to BetterChat!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Provide Username to sign in!
          <div className="login">
                            <div className="loginsearchbar">
                                    <input className="logininputfield"   placeholder=" Enter Username" value={newUser} onChange={(e)=>setUse(e)} ></input>
                                    <button className="submit" onClick={()=>setUser()} > Submit</button>
                                   
                            </div>
          </div>
              
          </Modal.Body>
          
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        
      </>
    );
  }

  export default Login;