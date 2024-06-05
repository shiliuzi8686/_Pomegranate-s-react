import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * useState
 */

function App() {
  // useState 可以接收一个函数，但是同步执行，不支持异步
  /**
   * const [num, setNum] = useState(() => {
      const num1 = 1 + 2;
      const num2 = 2 + 3;
      return num1 + num2
    });
   */
  const [num, setNum] = useState(1)
  return (
    <div className="App" onClick={ () => setNum(num + 1)}>{num}</div>
  );
}

export default App;
