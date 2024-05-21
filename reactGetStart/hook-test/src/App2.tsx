import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

async function fetchData(): Promise<Number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(520)
    }, 3000)
  })
}

function App() {
  const [num, setNum] = useState(1)
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res)
      setNum(Number(res))
    })
  }, [])
  return (
    <div className="App" onClick={ () => setNum(num + 1)}>{num}</div>
  );
}

export default App;
