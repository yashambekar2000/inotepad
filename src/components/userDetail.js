import React,{ useContext , useState }  from 'react'
import './css/userDetail.css'
import Notes from './Notes';
import noteContext from '../context/notes/NoteContext'


const UserDetail = ()=> {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note , setNote] = useState({tittle:"" , description:"" , tag:"default"})

  const handleClick = (e)=>{
   e.preventDefault();
    addNote(note.tittle,note.description,note.tag);
  }

  const onChange = (e)=>{
    //**********there is what in value of input changes then that is in state also changes ******** */
setNote({...note,[e.target.name]: e.target.value})
  }


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
<div className='tittlediv'>
<label htmlFor="tittle">Add Tittle : </label><br />
<input type="text" id="tittle" name="tittle" onChange={onChange} />
</div>

<label htmlFor="description">Add Description : </label>
    <textarea name="description" id="description" cols="65" rows="10" onChange={onChange}></textarea>

   <button className='submitaddnote' onClick={handleClick}>Submit</button>

       </div>
      
       <div className="vl"></div>
       <Notes />
      </div>
    );
  }


export default UserDetail
