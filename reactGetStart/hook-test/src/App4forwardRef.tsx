import React from 'react';
import { useRef, useEffect, useImperativeHandle } from 'react';
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

interface RefProps {
  bbb: () => void;
}

const Shiliu: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  // 不把原生标签暴露出去，而是暴露一些自定义内容
  useImperativeHandle(ref, () => {
    return {
      bbb() {
        inputRef.current?.focus()
      }
    }
  }, [inputRef])
  return <div>
    <input ref={inputRef} />
  </div>
}

const WrapedShiliu = React.forwardRef(Shiliu)

function App() {
  const action = useRef<RefProps>(null)
  // window.iii = inputRef
  useEffect( () => {
    console.log('action', action);
    
    action?.current?.bbb()
    // console.log('inputRef', inputRef);
  })

  return <div>
    <WrapedShiliu ref={action} />
  </div>
}

export default App;
