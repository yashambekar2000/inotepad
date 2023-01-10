import React,{useContext} from 'react'
import contextValue from '../context/notes/NoteContext';
import './css/Note.css';
import NoteItem from './NoteItem';


const Notes = ()=> {
    const context = useContext(contextValue);
    const {notes , setNotes} = context;
    
    return (
<div className='notesfield'>
<h2>Your Notes</h2>
{notes.map((notes)=>{
    return <NoteItem key={notes._id} notes={notes}/>;
})}
{/* <h2>Tittle 1</h2>
<p>Date 1</p>
<textarea name="fetchednote" id="" cols="60" rows="20"></textarea>

<h2>Tittle 1</h2>
<p>Date 1</p>
<textarea name="fetchednote" id="" cols="60" rows="20"></textarea> */}
</div>

    );
}

export default Notes;
