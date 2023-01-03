import React,{ useContext , useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
const About = () => {
  const a = useContext(noteContext);
  useEffect(()=>{
        a.update();
        //eslint-disable-next-line
    },[])
   
  return (
    <div style={{width:'100%',marginTop:'70px'}}>about
{/* <h2>Hello I Am {a.name} who is in {a.class}</h2> */}
<h2>Hello Brother {a.state.name} who is in {a.state.class}</h2>

    </div>
  )
}

export default About