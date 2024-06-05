import React from 'react';
import { useRef, useContext, createContext } from 'react';
import './App.css';

/**
 * useContext
 * 跨任意层组件传递数据，我们一般用 Context
 * 用 createContext 创建 context，在 Aaa 里面使用 xxxContext.Provider 修改它的值，然后在 Bbb 里面用 useContext 取出来
 * 用 createContext 创建 context 对象，用 Provider 修改其中的值， function 组件使用 useContext 的 hook 来取值，class 组件使用 Consumer 来取值
 */

const Context = createContext('111')

function App() {
  return (
    <div>
      <Context.Provider value='shiliu' >
        <Aaa/>
      </Context.Provider>
    </div>
  )
}

function Aaa(){
  return <div>
    <Context.Provider value='hhh' >
      <Bbb/>
    </Context.Provider>
  </div>
}

function Bbb(){
  const value = useContext(Context)
  return <div>
   Context: {value}
  </div>
}

export default App;
