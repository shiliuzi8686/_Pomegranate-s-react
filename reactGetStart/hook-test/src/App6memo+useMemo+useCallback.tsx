import React from 'react';
import { useState, memo, useEffect, useContext, createContext } from 'react';
import './App.css';

/**
 * useContext
 * 所以说，如果子组件用了 memo，那给它传递的对象、函数类的 props 就需要用 useMemo、useCallback 包裹，否则，每次 props 都会变，memo 就没用了。
 * 反之，如果 props 使用 useMemo、useCallback，但是子组件没有被 memo 包裹，那也没意义，因为不管 props 变没变都会重新渲染，只是做了无用功。
 * memo + useCallback、useMemo 是搭配着来的，少了任何一方，都会使优化失效。
 * 
 * 但 useMemo 和 useCallback 也不只是配合 memo 用的：
 *    比如有个值的计算，需要很大的计算量，你不想每次都算，这时候也可以用 useMemo 来缓存。
 */

function App() {
  const [count,setRender] = useState(1)

  useEffect(() => {
    setInterval(() => {
      setRender(Math.random())
    }, 2000);
  })
  return (
    <div>
      {/* props为父组件传入， 变了会触发 memo 的重新渲染 */}
      <MemoAaa count={count}/> {/* Wrap the component with angle brackets */}
    </div>
  )
}

// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件。
const MemoAaa = memo(Aaa)

function Aaa(props: {count: number}){
  console.log('Aaa render');
  
  return <div>
    {props.count}
  </div>
}

export default App;
