import React,{ useContext , useEffect } from 'react'
import { useHistory } from 'react-router-dom';
// import noteContext from '../context/notes/NoteContext'
const About = () => {
  // const a = useContext(noteContext);
  // useEffect(()=>{
  //       a.update();
  //       //eslint-disable-next-line
  //   },[])
  const history=useHistory();
   if(localStorage.getItem('token')){
  return (
  
  <div style={{width:'100%',marginTop:'70px'}}>about
{/* <h2>Hello I Am {a.name} who is in {a.class}</h2> */}
<h2>Hello Brother  </h2>

    </div>
  )

   }else{
    history.push("/loginSignup");
   }
}

export default About