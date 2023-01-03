
// import react,{ useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
const state ={
    "name":"yash",
    "class":"10A"
}

// const [state , setState] = useState(s1);
// const update = ()=>{
//     setTimeout(()=>{
//         setState({
//             'name':'Raj',
//             'class':'9A'
//         })
//     },1000);
// }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;