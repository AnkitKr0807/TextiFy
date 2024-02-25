import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#161618';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
<>
   
   <Navbar title="TextiFy" mode={mode} toggleMode={toggleMode}></Navbar>

   <div className="container my-3">
      <TextForm heading="Enter Text to Analyse" mode={mode}></TextForm>
   </div>
{/* <div className="container my-2">
<About></About>
</div> */}
</>
  );
}

export default App;
