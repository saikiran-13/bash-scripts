import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const handleClick = async () => {
    try {
      let res = await fetch('http://localhost:9000/api/executeScript');
      res = await res.json();
      console.log("Response", res);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="App">
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
