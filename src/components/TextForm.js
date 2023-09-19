import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState()

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
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
            </div>
        </div>
        </>
    )
}
