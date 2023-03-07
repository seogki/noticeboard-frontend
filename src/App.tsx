import React from 'react'
import '@assets/scss/_common.scss'
import './App.scoped.scss'
import { Desktop, Tablet, Mobile } from '@assets/mediaQuery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyHeader from '@ui/Header/MyHeader'
import MyMain from '@ui/Main/MyMain'
import Login from '@ui/Login/Login'
import MyFooter from '@ui/Footer/MyFooter'
import Register from '@ui/Login/Register'
import LoginPage from '@ui/components/page/LoginPage'
import SignUpPage from '@ui/components/page/SignUpPage'
import MainPage from '@ui/components/page/MainPage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <MyHeader /> */}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MyFooter /> */}
    </div>
  )
}

export default App
