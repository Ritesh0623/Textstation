import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Station" about="About Us" />
      <TextForm heading="Enter Text" />
    </>
  );
}

export default App;
