
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Userdetail from './components/UserDetail'
import About from './components/About'

import NoteState from './context/notes/NoteState';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
  <>

<NoteState>

<Router>
<Navbar />
<Alerts message="This is Amazing Website"/>

<div className='App'>
<Switch>
<Route exact path="/">
<Userdetail />

</Route>
<Route exact path="/about">
<About/>
</Route>
</Switch>
</div>
</Router>
</NoteState>
   
    </> 
  );
}

export default App;
