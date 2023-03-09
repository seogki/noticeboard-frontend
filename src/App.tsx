import React from 'react'
import '@assets/scss/_common.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@ui/components/page/LoginPage'
import SignUpPage from '@ui/components/page/SignUpPage'
import MainPage from '@ui/components/page/MainPage'
import { GlobalStyle } from '@assets/styled/global'
import styled from 'styled-components'

const MyApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <MyApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/Register" element={<SignUpPage />}></Route>
          </Routes>
        </BrowserRouter>
      </MyApp>
    </>
  )
}

export default App
