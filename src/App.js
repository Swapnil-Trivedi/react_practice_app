import './App.css';
//core imports
import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


//Components
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';



function App() {

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    //to remove the alert after few seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  return (
    <>
    <Router>
    <Navbar title="TextUtils"/>
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextForm  showAlert={showAlert} heading=" Enter Text to Analyze" />} />
    </Routes>
    </div>

    
    </Router>
    </>
  );
}

export default App;
