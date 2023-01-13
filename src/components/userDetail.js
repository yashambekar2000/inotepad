import React,{ useContext , useState , useEffect }  from 'react'
import './css/userDetail.css'
import Notes from './Notes';
import noteContext from '../context/notes/NoteContext'


const UserDetail = (props)=> {
  const context = useContext(noteContext);
  const {addNote,getUser,userdata } = context;
const{ showAlert} = props;
  const [note , setNote] = useState({tittle:"" , description:"" , tag:""})

  useEffect(() => {
  
  getUser();
   
  }, [])
  
  const handleClick = (e)=>{
   e.preventDefault();
    addNote(note.tittle,note.description,note.tag);
    setNote({tittle:"" , description:"" , tag:""});
   
    showAlert("Added Successfully ","success");
  
  }

  const onChange = (e)=>{
    //**********there is what in value of input changes then that is in state also changes ******** */
setNote({...note,[e.target.name]: e.target.value})
  }


    return (
      <div className='mainpage'>
       <div className='userdetail'>
        <h2>{userdata.name}</h2>
        <label htmlFor="">Username :- </label>
        <span> {userdata.name}</span>
        <br />
        <label htmlFor="">Mobile Number :- </label>
        <span>{userdata.mobile}</span>
       </div>
       <br />
       <div className='notemake'>
<div className='tittlediv'>
<label htmlFor="tittle">Add Tittle : </label><br />
<input type="text" id="tittle" name="tittle" onChange={onChange} value={note.tittle} minLength={3} required/>
</div>
<div className='tagdiv'>
<label htmlFor="tag">Add Tag : </label><br />
<input type="text" id="tag" name="tag" value={note.tag} onChange={onChange} required/>
</div>
<label htmlFor="description">Add Description : </label>
    <textarea name="description" id="description" cols="65" rows="10" value={note.description} onChange={onChange} minLength={5} required></textarea>

   <button disabled={note.tittle.length<3 || note.description.legth<5} className='submitaddnote' onClick={handleClick}>Submit</button>

       </div>
      
       <div className="vl"></div>
       <Notes showAlert={showAlert}/>
      </div>
    );
  }


export default UserDetail
