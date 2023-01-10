
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{




 
    const notesInitial = [
        {
          "_id": "63ad7b7afb3794233ca2f53ca",
          "user": "63ac3689a102767e27b2093f",
          "tittle": "instagram1",
          "description": "instagram1 is a soscial app",
          "tag": "instagram1 App",
          "date": "2022-12-29T11:35:22.631Z",
          "__v": 0
        },
        {
          "_id": "63ad7ba4fb3794233ca2f53ef",
          "user": "63ac3689a102767e27b2093f",
          "tittle": "instagram2",
          "description": "instagram2 is a soscial app",
          "tag": "instagram2 App",
          "date": "2022-12-29T11:36:04.317Z",
          "__v": 0
        },
        {
          "_id": "63ad7b7afb3794233ca2f53cq",
          "user": "63ac3689a102767e27b2093f",
          "tittle": "instagram1",
          "description": "instagram1 is a soscial app",
          "tag": "instagram1 App",
          "date": "2022-12-29T11:35:22.631Z",
          "__v": 0
        },
        {
          "_id": "63ad7ba4fb3794233ca2f53ey",
          "user": "63ac3689a102767e27b2093f",
          "tittle": "instagram2",
          "description": "instagram2 is a soscial app",
          "tag": "instagram2 App",
          "date": "2022-12-29T11:36:04.317Z",
          "__v": 0
        },
        {
          "_id": "63ad7b7afb3794233ca2f53ch",
          "user": "63ac3689a102767e27b2093f",
          "tittle": "instagram1",
          "description": "instagram1 is a soscial app",
          "tag": "instagram1 App",
          "date": "2022-12-29T11:35:22.631Z",
          "__v": 0
        },
        {
          "_id": "63ad7ba4fb3794233ca2f53el",
          "user": "63ac3689a102767e27b2093f",
          "tittle": "instagram2",
          "description": "instagram2 is a soscial app",
          "tag": "instagram2 App",
          "date": "2022-12-29T11:36:04.317Z",
          "__v": 0
        }
      ];



   

const [notes , setNotes] = useState(notesInitial);

 //**********Add Notes  ******* */
 const addNote = (tittle,description,tag)=>{
const note={
  "_id": "63ad7ba4fb3794233ca2f53em",
  "user": "63ac3689a102767e27b2093f",
  "tittle": tittle,
  "description": description,
  "tag": tag,
  "date": "2022-12-29T11:36:04.317Z",
  "__v": 0
}
setNotes(notes.concat(note));
 }

 //*********Get Notes  ******* */
 const getNote = ()=>{
   
 }

 //**********Delete Notes  ******* */
 const deleteNote = ()=>{
   
 }

    return(
        <NoteContext.Provider value={{notes , setNotes ,addNote ,getNote ,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;