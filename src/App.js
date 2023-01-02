
import './App.css';
import React from'react'
import Navbar from './components/navbar';
import Userdetail from './components/userDetail'


function App() {
  return (
    <div className='App'>
      <Navbar />
{/* <h1 style={{marginTop:'200px'}}>hii this is a inotepad project</h1> */}
<Userdetail />

    </div>
  );
}

export default App;
