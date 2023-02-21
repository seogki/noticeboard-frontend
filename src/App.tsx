import React from 'react'
import Main from './ui/Main/Main'
import './App.scss'
import { Desktop, Tablet, Mobile } from '@assets/mediaQuery'
function App() {
  return (
    <div className="App">
      <Desktop>
        <Main />
      </Desktop>
      <Tablet>
        <p>테블릿</p>
      </Tablet>
      <Mobile>
        <p>모바일</p>
      </Mobile>
    </div>
  )
}

export default App
