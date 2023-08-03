
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextComponent from './components/TextComponent';
// import AboutUS from './components/AboutUS'
import Alert from './components/Alert'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light") 
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) =>{
    setAlert({
      msg : msg,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = (cls) => {

    // if(cls === 'primary'){
    //   setMode('primary')
    //   document.body.classList.add("bg-" + cls)
    //   document.body.classList.remove("bg-dark")
    //   document.body.classList.remove("bg-light")
    //   document.body.classList.remove("bg-success")
    //   document.body.classList.remove("bg-warning")
    //   document.body.classList.remove("bg-danger")
    // }

    // else if(cls === 'danger'){
    //   setMode('danger')
    //   document.body.classList.add("bg-" + cls)
    //   document.body.classList.remove("bg-dark")
    //   document.body.classList.remove("bg-primary")
    //   document.body.classList.remove("bg-success")
    //   document.body.classList.remove("bg-warning")
    //   document.body.classList.remove("bg-light")
    // }

    // else if(cls === 'warning'){
    //   setMode('warning')
    //   document.body.classList.add("bg-" + cls)
    //   document.body.classList.remove("bg-dark")
    //   document.body.classList.remove("bg-primary")
    //   document.body.classList.remove("bg-success")
    //   document.body.classList.remove("bg-light")
    //   document.body.classList.remove("bg-danger")
    // }

    // else if(cls === 'success'){
    //   setMode('success')
    //   document.body.classList.add("bg-" + cls)
    //   document.body.classList.remove("bg-dark")
    //   document.body.classList.remove("bg-primary")
    //   document.body.classList.remove("bg-light")
    //   document.body.classList.remove("bg-warning")
    //   document.body.classList.remove("bg-danger")
    // }

    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#201f23'
      showAlert("The Light mode has been set Successfully", "success")
      // document.body.classList.remove("bg-dark")
      // document.body.classList.remove("bg-primary")
      // document.body.classList.remove("bg-success")
      // document.body.classList.remove("bg-warning")
      // document.body.classList.remove("bg-danger")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("The Dark mode has been set Successfully", "success")
      // document.body.classList.remove("bg-light")
      // document.body.classList.remove("bg-primary")
      // document.body.classList.remove("bg-success")
      // document.body.classList.remove("bg-warning")
      // document.body.classList.remove("bg-danger")
    }
  }

  return (
    <>
          {/* <TextComponent/> */}
      {/* <Router>
          <Navbar title = "TextUtils" about = "About us" home = "Home" contact = "Get Connected" mode = {mode} changingMode = {toggleMode}/>
          <Alert alert = {alert}/>
          <Routes>
          <Route exact path="/about" element = {
              <AboutUS heading1 = "About kashif" heading2 = "About Khurram" heading3 = "About Faheem" mode = {mode} />
            }>
            </Route>
            <Route exact path="/"  element  = {
              <TextComponent heading = "Enter Text Here" upperButton = "UpperCase" lowerButton = "LowerCase" clearButton = "Clear" copyButton = "Copy Text" reverseButton = "Reverse" titlecaseButton = "TitleCase" mode = {mode} showAlert = {showAlert} />
            }>
            </Route>
            </Routes>
      </Router>   */}

      <Navbar title = "TextUtils" about = "About us" home = "Home" contact = "Get Connected" mode = {mode} changingMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <TextComponent heading = "Enter Text Here" upperButton = "UpperCase" lowerButton = "LowerCase" clearButton = "Clear" copyButton = "Copy Text" reverseButton = "Reverse" titlecaseButton = "TitleCase" mode = {mode} showAlert = {showAlert} />
    </>
  );
}

export default App;


