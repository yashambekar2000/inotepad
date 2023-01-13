import React,{ useEffect } from 'react'
import { Link , useHistory, useLocation } from 'react-router-dom';
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


  
const Navbar = ()=> {
 const history = useHistory();
 const handleLogout = ()=>{
  localStorage.removeItem('token');
  history.push("/loginSignup");

 }
 
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
                <li className='list-item'>{!localStorage.getItem('token')?<Link to="/loginSignup"className='popupms' >SingIn/SignUp</Link>:<button onClick={handleLogout} className='popupms'>Logout</button>} </li>
            </ul>
        </div>
        
      </div>
    );
  }


export default Navbar
