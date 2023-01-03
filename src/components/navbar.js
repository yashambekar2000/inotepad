import React from 'react'
import { Link } from 'react-router-dom';
import './css/navbar.css'

function popup(){
  var divstyle = document.getElementsByClassName('popupscreen');
  var insideMsg = document.getElementsByClassName('popupmsg');
 //  divstyle.style.display="block"
  divstyle[0].style.width="100%"
  divstyle[0].style.height="100vh"
  divstyle[0].style.backgroundColor="rgba(0, 0, 0, 0.493)"
  divstyle[0].style.zIndex="999"
  divstyle[0].style.position="absolute"
  divstyle[0].style.top="0%"
  insideMsg[0].style.width="400px"
  insideMsg[0].style.height="500px"
  insideMsg[0].style.marginLeft="510px"
  insideMsg[0].style.alignItems="center"
  insideMsg[0].style.alignContent="center"
  insideMsg[0].style.backgroundColor="#61dafb"
  insideMsg[0].style.marginTop="100px"
  insideMsg[0].style.border="2px solid white"
 
 
 
 }
const navbar = ()=> {
  
    return (
      <div className='nav'>
        <div className='logo'>
            <h2><Link to="/no">iNotePad</Link> </h2>
        </div>
        <div className='popupscreen'>
          
          <div className='popupmsg'>

          </div>
      </div>
      
        <div className='list'>
            <ul>
                <li><Link to="/">Home</Link> </li>
               
                <li><Link to="/account">Account</Link> </li>
                <li><Link to="/about">About</Link> </li>
                <li><button  className='popupms' onClick={popup}>SingIn/SignUp</button> </li>
            </ul>
        </div>
      </div>
    );
  }


export default navbar
