import React,{useState} from "react";



export default function Textform(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Clear text!","success")
  }
  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!","success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is cleared!","success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text,setText] = useState('');
  // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
      <h1>{props.heading}</h1>
      <div className="form-floating mt-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="myBox" 
          value={text} 
          onChange={handleOnChange} 
          style={{height: "200px",backgroundColor: props.mode===`light`?`white`:`#042743`,color: props.mode===`dark`?`white`:`black`}}
        ></textarea>
        <label htmlFor="floatingInputGroup1">Enter text here</label>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2 my-1" onClick={handleClearClick} >Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2 my-1" onClick={handleCopyClick} >Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2 my-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
      </div>
      <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      </div>
      <div className="container">
      <h2 style={{color: props.mode===`dark`?`white`:`black`}}>Preview</h2>
        <p style={{color: props.mode===`dark`?`white`:`black`}}>{text.length>0 ? text : "Nothing to preview"}</p>
      </div>

    </>
  );
}
