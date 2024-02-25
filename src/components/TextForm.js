import React,{useState} from 'react'


export default function TextForm(props) {
const handleUpClick = (event) => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLoClick = (event) => {
    console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClearClick = (event) => {
    console.log("Cleared" + text);
    let newText =('');
    setText(newText);
}
    const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
}

const handleCopy = () =>{
    console.log("I am a Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
}

    const [text, setText] = useState('');
  return (
    <>
<div style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="container my-2">
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
</div>
</div> 
<div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summery</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>This will take {0.008 * text.split(" ").length} minutes to Read.</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</> 
  )
}