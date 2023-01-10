import React from 'react'

 const NoteItem = (props) => {
  const {notes} = props;
    return (
  
<div className="card my-3 mx-3" >
 
  <div className="card-body">
    <h5 className="card-title">{notes.tittle}</h5>
    <p className="card-text">{notes.description}</p>
    <i className="fa-sharp fa-solid fa-trash mx-3"></i>
    <i className="fa-regular fa-pen-to-square mx-3"></i>
  </div>
</div>
  
  )
}
export default NoteItem;