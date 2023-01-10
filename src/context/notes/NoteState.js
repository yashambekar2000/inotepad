
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);





  //**********Add Notes  ******* */
  const addNote = async (tittle, description, tag) => {

    const response = await fetch(`${host}/api/notes/savenotes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM2ODlhMTAyNzY3ZTI3YjIwOTNmIn0sImlhdCI6MTY3MjI5Mzc1Nn0.-gH5k4SWFz_c-jtzTgQWT1V4brzJisMVZpT6wiG0wyE'
      },
      body: JSON.stringify({ tittle, description, tag })
    });
    const note =await response.json();
    setNotes(notes.concat(note));
  }




  //*********Get Notes  ******* */
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM2ODlhMTAyNzY3ZTI3YjIwOTNmIn0sImlhdCI6MTY3MjI5Mzc1Nn0.-gH5k4SWFz_c-jtzTgQWT1V4brzJisMVZpT6wiG0wyE"
      }

    });
    const json = await response.json();
    console.log(json);
    setNotes(json);

  }



  //**********Delete Notes  ******* */
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM2ODlhMTAyNzY3ZTI3YjIwOTNmIn0sImlhdCI6MTY3MjI5Mzc1Nn0.-gH5k4SWFz_c-jtzTgQWT1V4brzJisMVZpT6wiG0wyE'
      },
      // body: JSON.stringify({tittle, description, tag})
    });
    const json =await response.json();
    console.log("your note deleted" + id);

    const newNotes = notes.filter((notes) => { return notes._id !== id });
    setNotes(newNotes);
  }




  //********** Edit Notes *************** */
  const editNote = async (id, tittle, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM2ODlhMTAyNzY3ZTI3YjIwOTNmIn0sImlhdCI6MTY3MjI5Mzc1Nn0.-gH5k4SWFz_c-jtzTgQWT1V4brzJisMVZpT6wiG0wyE'
      },
      body: JSON.stringify({ tittle, description, tag })
    });
    const json =await response.json();
    console.log(json);

    let newNote = JSON.parse(JSON.stringify(notes));
    //*****Logic to edit in client */
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].tittle = tittle;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, getNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;