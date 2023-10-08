import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const copyText = () => {
        var text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard", "success");
    }
    const clearSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space cleared", "success");
    }
    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Textbox cleared", "success");
    }
    const caseOnchange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className="container my-5" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={caseOnchange} id='myText' rows="8" style={{backgroundColor : props.mode === 'dark'?'#06041b':'white', color : props.mode === 'dark'?'white':'black'}}></textarea>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mr-2" onClick={upperCase}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={lowerCase}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={clearSpace}>Clear Space</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear</button>
            </div>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} character in your summary.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview your text here"}</p>
        </div>
        </>
    )
}

