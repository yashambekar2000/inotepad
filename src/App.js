
import './App.css';
import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import Userdetail from './components/UserDetail'
import About from './components/About'
import Login_Signup from './components/Login_Signup';
import NoteState from './context/notes/NoteState';
import Alerts from './components/Alerts';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
   setAlert({
    msg: message,
    type: type

  });
  setTimeout(()=>{
    setAlert(null);
  }, 1500);
  }
  
  
  return (
  <>

<NoteState>

<Router>
<Navbar />
<Alerts alert={alert}/>

<div className='App'>
<Switch>
<Route exact path="/">
<Userdetail showAlert={showAlert} />

</Route>
<Route exact path="/about">
<About/>
</Route>

<Route exact path="/loginSignup">
<Login_Signup showAlert={showAlert} />
</Route>

<Route exact path="/signup">
<Signup showAlert={showAlert} />
</Route>
</Switch>
</div>
</Router>
</NoteState>
   
    </> 
  );
}

export default App;
