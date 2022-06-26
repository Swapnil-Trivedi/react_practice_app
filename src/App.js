import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


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
    <Navbar title="TextUtils"/>
    <Alert alert={alert}/>
    <TextForm  showAlert={showAlert} heading=" Enter Text to Analyze" />
    </>
  );
}

export default App;
