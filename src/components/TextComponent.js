import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextComponent(props){
    
    const[text, updateText] = useState("")

    const upperCase = () => {
        console.log("hello ggv , this is convertion");
        let newText = text.toUpperCase();
        updateText(newText);
        props.showAlert("The Text is converted to Uppercase Successfully", "success")
    }
    
    const changeValue = (event) => {
        console.log("This is onchange event")
        updateText(event.target.value)
    }
    
    const clearText = () => {
        let newText = ""
        updateText(newText)
        props.showAlert("The Text is Cleared Successfully", "success")
    }
    
    const lowerCase = () => {
        console.log("hello ggv , this is convertion");
        let newText = text.toLowerCase();
        updateText(newText);
        props.showAlert("The Text is converted to Lowercase Successfully", "success")
    }
    
    const reverse = () => {
        let words = text.split(' ');
        let reversedWords = words.reverse();            // it reverse the order of array
        let newText = reversedWords.join(' ');
        updateText(newText);
        props.showAlert("The Text is Reversed Successfully", "success")
    }
    
    const titlecase = () => {
        let textArray = text.split(' ');
        
        let newTextArray = textArray.map((arrayWords) => {
            return arrayWords.slice(0,1).toUpperCase() + arrayWords.slice(1).toLowerCase()
        })
        
        let joinArray = newTextArray.join(" ")
        updateText(joinArray)
        props.showAlert("The Text is converted to Titlecase Successfully", "success")
    }
    
    const copy = () =>{
        let textarea = document.getElementById("TextArea")
        textarea.select()
        document.execCommand('copy')
        props.showAlert("The Text is Copied to Clipboard Successfully", "success")
    }

    return(
        <>
            <div className="container">
                <div className="mb-3">
                    <h2 className='my-4' style = {{color : props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h2>
                    <textarea className="form-control" style = {{backgroundColor : props.mode === 'light' ? 'white' : '#170038', color : props.mode === 'light' ? 'black' : 'white'}} id="TextArea" onChange={changeValue} value = {text} rows="9" placeholder='Enter Your text'></textarea>
                    <button className='btn btn-primary my-3' onClick={upperCase}>{props.upperButton}</button>
                    <button className='btn btn-primary my-3 mx-2 ' onClick={lowerCase}>{props.lowerButton}</button>
                    <button className='btn btn-primary my-3 mx-2 ' onClick={reverse}>{props.reverseButton}</button>
                    <button className='btn btn-primary my-3 mx-2 ' onClick={titlecase}>{props.titlecaseButton}</button>
                    <button className='btn btn-primary my-3 mx-2 ' onClick={copy}>{props.copyButton}</button>
                    <button className='btn btn-primary my-3 mx-2 ' onClick={clearText}>{props.clearButton}</button>
                </div>
            </div>

            <div className="container" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h3>Text Summary</h3>
                <p>There are <b>{text.split(/\S+/).length-1}</b> words and <b>{text.length}</b> Characters </p>
                <p>It tooks almost <b>{0.006 * text.split(/\S+/).length - 0.006}</b> Minutes to read </p>
            </div>
        </>
    )   
}

TextComponent.propTypes = {
    heading : PropTypes.string.isRequired
}

TextComponent.defaultProps = {
    heading: "Enter your heading"
}