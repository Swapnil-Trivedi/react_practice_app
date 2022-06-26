import React, {useState} from 'react'

//using the stat to get the input from the component.
// useState is used to let us use state without a , we cannot update the text direct.


export default function TextForm(props) {
    const [text,setText]=useState('');

    const handleUpperClick=()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
      
    }
    
    const handleClearClick=()=>{
        console.log("Clear text clicked");
        let newText="";
        setText(newText);
    }


    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    return (
    <>
    <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">{props.heading}</label>
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008*text.split(" ").length}</b> Minutes to read</p>    
        <h3>Preview</h3>
        <p>{text}</p>
    
    </div>    

    </>
  )
}
