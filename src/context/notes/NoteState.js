
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  const userdataInitial = []
  const [userdata, setUserdata] = useState(userdataInitial);

//***************** Get User **************** */
const getUser = async () => {

  const response = await fetch(`${host}/api/auth/getuser`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'auth-token': localStorage.getItem('token')
    },
    
  });
  const userjson =await response.json();
  console.log(userjson);
  setUserdata(userjson);
}


  //**********Add Notes  ******* */
  const addNote = async (tittle, description, tag) => {

    const response = await fetch(`${host}/api/notes/savenotes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
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
        'auth-token': localStorage.getItem('token')
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
        'auth-token': localStorage.getItem('token')
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
    <NoteContext.Provider value={{ notes, setNotes, addNote, getNote, deleteNote, editNote , userdata , setUserdata , getUser }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;