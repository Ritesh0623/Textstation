import './App.css';
import React, {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
      <Navbar title="Text Station" about="About Us" mode={mode} darkModeBtn={darkModeBtn} />
      <TextForm heading="Enter Text" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
