import React,{useState} from 'react'

export default function Textform(props) {

const handleUpClick= () =>{
    let newText= text.toUpperCase();
    setText(newText)
}

const handleLoClick= () =>{
    let newText= text.toLowerCase();
    setText(newText)
}

const handleClearClick= () =>{
    let newText= '';
    setText(newText)
}

const handleExtraSpaceClick= () =>{
      let newText = text.replaceAll("  ", " ");
    setText(newText)
}
    const handleOnChange= (event) =>{
            setText(event.target.value);

}

const[text,setText]= useState('Enter Text Below');
// text="New Text" Thats the wrong way to change state
// setText("New Text") Thats the correct way to change state

return (
<>
<div className='container'>
    <h1>{props.heading}</h1>

<div className="form-field">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8}></textarea>
</div>

<button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Upper Case</button>

<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>

<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

<button className="btn btn-primary mx-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>



</div>

<div className=" container my-2">
        <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
</div>

</>
)
}
