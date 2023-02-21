import React from 'react'
import '@assets/scss/_common.scss'
import './App.scss'
import { Desktop, Tablet, Mobile } from '@assets/mediaQuery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyHeader from '@ui/Header/MyHeader'
import MyMain from '@ui/Main/MyMain'
import Login from '@ui/Login/Login'
import MyFooter from '@ui/Footer/MyFooter'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<MyMain />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MyFooter /> */}
    </div>
  )
}

export default App
