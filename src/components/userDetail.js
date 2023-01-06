import React from 'react'
import './css/userDetail.css'



const UserDetail = ()=> {
  
    return (
      <div className='mainpage'>
       <div className='userdetail'>
        <h2>Yash Ambekar</h2>
        <label htmlFor="">Username :- </label>
        <span> Ambekaryash</span>
        <br />
        <label htmlFor="">Mobile Number :- </label>
        <span> 1234567890</span>
       </div>
       <br />
       <div className='notemake'>
<h2>Tittle</h2>
<p>Date</p>

    <textarea name="note" id="" cols="65" rows="10"></textarea>

   

       </div>
      
       <div className="vl"></div>
      </div>
    );
  }


export default UserDetail
