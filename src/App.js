
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Userdetail from './components/UserDetail'
import About from './components/About'
import Notes from './components/Notes';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='App'>

<NoteState>

<Router>
<Navbar />

<Switch>
<Route exact path="/">
<Userdetail />
<Notes />
</Route>
<Route exact path="/about">
<About/>
</Route>
</Switch>

</Router>
</NoteState>
    </div>
  );
}

export default App;
