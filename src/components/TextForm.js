import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const copyText = () => {
        var text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const clearSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const clearText = () => {
        let newText = '';
        setText(newText);
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
                <button className="btn btn-primary my-2 mx-2" onClick={upperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={lowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearSpace}>Clear Space</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear</button>
            </div>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} character in your summary.</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview your text here"}</p>
        </div>
        </>
    )
}

