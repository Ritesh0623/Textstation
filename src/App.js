import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
// import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light')
  
  const darkModeBtn = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#06041b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="Text Station" about="About Us" mode={mode} darkModeBtn={darkModeBtn} />
      <Routes>
        <Route path='/' element={<TextForm heading="Enter Text here" mode={mode} />}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
      </BrowserRouter>
      {/* <TextForm heading="Enter Text" mode={mode} /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
