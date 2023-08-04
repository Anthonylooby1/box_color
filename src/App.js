import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Box from './Box';
import { useState } from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState([])
  const selectedColor = (showColor)=> {
    setCurrentColor([...currentColor,showColor])
  }
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form newColor = {selectedColor}/>
      <Box boxColor = {currentColor}/>
    </div>
  );
}

export default App;
