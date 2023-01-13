import React ,{useContext}from 'react'
import contextValue from '../context/notes/NoteContext';
 const NoteItem = (props) => {
  const context = useContext(contextValue);
  const {deleteNote} = context;
  const {notes , updateNote } = props;
    return (
  
<div className="card my-3 mx-3" >
 
  <div className="card-body">
    <h5 className="card-title">{notes.tittle}</h5>
    <p className="card-text">{notes.tag}</p>
    <p className="card-text">{notes.description}</p>
    <i className="fa-sharp fa-solid fa-trash mx-3" onClick={()=>{deleteNote(notes._id);  props.showAlert("Deleted Successfully ","success");;}}></i>
    <i className="fa-regular fa-pen-to-square mx-3"onClick={()=>{updateNote(notes);}}></i>
  </div>
</div>
  
  )
}
export default NoteItem;