import React from 'react';
import { useRef, useEffect } from 'react';
import './App.css';

/**
 * forwardRef + useImperativeHandle
 * 如果是想从子组件传递 ref 到父组件，就需要 forwardRef 了，也就是把组件内的 ref 转发一下
 */

declare global {
  interface Window {
    iii: React.MutableRefObject<number>;
  }
}

const Shiliu: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return <div>
    <input ref={ref} />
  </div>
}

const WrapedShiliu = React.forwardRef(Shiliu)

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  // window.iii = inputRef
  useEffect( () => {
    inputRef?.current?.focus()
    console.log('inputRef', inputRef);
  })

  return <div>
    <WrapedShiliu ref={inputRef} />
  </div>
}

export default App;
