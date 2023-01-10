import React, { useContext, useEffect, useRef, useState } from 'react'
import './css/Note.css';
import NoteItem from './NoteItem';
import noteContext from '../context/notes/NoteContext'

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNote , editNote } = context;



    const [note, setNote] = useState({ eid: "", etittle: "", edescription: "", etag: "" })
    useEffect(() => {
        getNote();
    }, [])

    const handleClick = (e) => {
        console.log("updating the note ....");
        e.preventDefault();
        editNote(note.eid , note.etittle , note.edescription , note.etag);
        refClose.current.click();
    }

    const onChange = (e) => {
        //**********there is what in value of input changes then that is in state also changes ******** */
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ eid: currentNote._id, etittle: currentNote.tittle, etag: currentNote.tag, edescription: currentNote.description });
    }

    const ref = useRef(null);
    const refClose = useRef(null);
    return (
        <>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='notemake'>
                                <div className='tittlediv'>
                                    <label htmlFor="etittle">Add Tittle : </label><br />
                                    <input type="text" id="etittle" name="etittle" value={note.etittle} onChange={onChange} minLength={3} required/>
                                </div>
                                <div className='tagdiv'>
                                    <label htmlFor="etag">Add Tag : </label><br />
                                    <input type="text" id="etag" name="etag" value={note.etag} onChange={onChange} required/>
                                </div>
                                <label htmlFor="edescription">Add Description : </label>
                                <textarea name="edescription" id="edescription" cols="65" rows="10" value={note.edescription} onChange={onChange} minLength={5} required></textarea>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etittle.length<3 || note.edescription.legth<5} className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='notesfield'>
                <h2>Your Notes</h2>
                <div className="container mx-2">
                {notes.length===0 && 'No Notes to show'}
                </div>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} updateNote={updateNote} notes={notes} />;
                })}
                {/* <h2>Tittle 1</h2>
<p>Date 1</p>
<textarea name="fetchednote" id="" cols="60" rows="20"></textarea>

<h2>Tittle 1</h2>
<p>Date 1</p>
<textarea name="fetchednote" id="" cols="60" rows="20"></textarea> */}
            </div>
        </>
    );
}

export default Notes;
