
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
const s1 ={
    "name":"yash",
    "class":"10A"
}

const [state , setState] = useState(s1);
const update = ()=>{
    setTimeout(()=>{
        setState({
            "name":"Raj",
            "class":"9A"
        })
    },2000);
}
    return(
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;