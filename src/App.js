import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Contact from './components/Contact';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState('light')
  
  const darkModeBtn = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#06041b';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="Text Station" about="About Us" contact="Contact" mode={mode} darkModeBtn={darkModeBtn} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm heading="Enter Text here" mode={mode} showAlert={showAlert} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      {/* <TextForm heading="Enter Text" mode={mode} /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
