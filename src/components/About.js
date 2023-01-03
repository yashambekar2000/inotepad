import React,{ useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
const About = () => {
  const a = useContext(noteContext);
  // UseEffect(()=>{
  //       a.update();
  //       //eslint-disable-next-line
  //   },[])
   
  return (
    <div style={{width:'100%',marginTop:'70px'}}>about

<h2>Hello Brother {a.name} </h2>

    </div>
  )
}

export default About