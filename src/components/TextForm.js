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
    const clearText = () => {
        let newText = '';
        setText(newText);
    }
    const caseOnchange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className="container my-5">
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={caseOnchange} id='myText' rows="8"></textarea>
                <button className="btn btn-primary my-2 mx-2" onClick={upperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={lowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear</button>
            </div>
        </div>
        <div className="container my3">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} character in your summary.</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

