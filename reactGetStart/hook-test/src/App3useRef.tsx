import React, { useRef } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * inputRef
 */

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  })
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

export default App;
