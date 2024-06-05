import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * inputRef
 * useRef 一般是用来存一些不是用于渲染的内容的
 */

// function App() {
//   const inputRef = useRef<HTMLInputElement>(null)
//   useEffect(() => {
//     inputRef?.current?.focus()
//   })
//   return (
//     <div>
//       <input ref={inputRef} />
//     </div>
//   );
// }
declare global {
  interface Window {
    iii: React.MutableRefObject<number>;
  }
}

function App() {
  const inputRef = useRef<number>(0)
  const [, forceRender] = useState(0)
  window.iii = inputRef
  return (
    <div>
      {/* 点击inputRef.current的值发生改变了，但不会触发重新渲染，页面一直显示 0 */}
      <div onClick={ () => {
        inputRef.current += 1
        // 每次点击因为setState 了，触发重新渲染
        forceRender(Math.random())
      }}>{inputRef.current}</div>
    </div>
  );
}

export default App;
