import logo from './logo.svg';
import './App.css';
import Navbar from './mycomp/Navbar';
import Textform from './mycomp/Textform';
import About from './mycomp/About';
import Alert from './mycomp/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  // Now we will Create another usestate function for the alert function;
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
      
    }, 1500);

  }


  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      showalert("Dark mode has been enabled ","success");
      document.title="Dark Mode"


    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("light Mode has been enable","danger");
      document.title="Light Mode"

    }
    
  }

  return (
    <>
    {/* <Navbar title={3} about="About" close="Disabled"/> */}
    {/* <Navbar> </Navbar> */}
    <Router>
    <Alert alert={alert}></Alert>
    <Navbar title="React Store" about="About" close="Disabled" mode={mode} togglemode={togglemode} />

    <div className="container">
    <Routes>
      <Route path="/About" element= {<About />}>
      </Route>
    <Route path="/" element= {<Textform heading ="Enter The text to analysze" mode={mode} showalert={showalert}></Textform>}>
    </Route>
    </Routes>
    </div>
    </Router>
    
  </>

  );
}
export default App;


