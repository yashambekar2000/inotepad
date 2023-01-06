import React,{ useEffect } from 'react'
import { Link , useLocation } from 'react-router-dom';
import './css/navbar.css'

let hamburger = document.getElementsByClassName("hamburger");
let navMenu = document.getElementsByClassName("list-menu");
let temp = true;

//*********function for nav items display or close while screen size is small************ */
function mobileMenu() {
  if(temp === true){
      hamburger[0].classList.add("active");
      navMenu[0].classList.add("active");
      temp=false;
  }else{
    hamburger[0].classList.remove("active");
      navMenu[0].classList.remove("active");
      temp=true;
  }
  }

function popup(){
  var divstyle = document.getElementsByClassName('popupscreen');
  var insideMsg = document.getElementsByClassName('popupmsg');
 //  divstyle.style.display="block"
  divstyle[0].style.width="100%"
  divstyle[0].style.height="100vh"
  divstyle[0].style.backgroundColor="rgba(0, 0, 0, 0.493)"
  divstyle[0].style.zIndex="9999"
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
const Navbar = ()=> {
 
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);


    return (
      <div className='nav'>
        <div className='logo'>
            <h2><Link to="/no">iNotePad</Link> </h2>
        </div>
        <div className="hamburger" onClick={mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
       
       
        <div className='popupscreen'>
          
          <div className='popupmsg'>

          </div>
      </div>
      
        <div className='list'>
            <ul className='list-menu'>
                <li className='list-item'><Link to="/" className={`nav-link ${location.pathname==="/"? "active": ""}`}>Home</Link> </li>
               
                <li className='list-item'><Link to="/account" className={`nav-link ${location.pathname==="/account"? "active": ""}`}>Account</Link> </li>
                <li className='list-item'><Link to="/about" className={`nav-link ${location.pathname==="/about"? "active": ""}`}>About</Link> </li>
                <li className='list-item'><button  className='popupms' onClick={popup}>SingIn/SignUp</button> </li>
            </ul>
        </div>
        
      </div>
    );
  }


export default Navbar
