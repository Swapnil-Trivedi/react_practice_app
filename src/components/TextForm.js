import React, {useState} from 'react'

//using the stat to get the input from the component.
// useState is used to let us use state without a , we cannot update the text direct.


export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');

    const handleUpperClick=()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    return (
    <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">{props.heading}</label>
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
    </div>
  )
}
