import '@assets/scss/_common.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@ui/components/page/LoginPage'
import SignUpPage from '@ui/components/page/SignUpPage'
import MainPage from '@ui/components/page/MainPage'
import { GlobalStyle } from '@assets/styled/global'
import styled from 'styled-components'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import ResetPasswordPage from '@ui/components/page/ResetPasswordPage'
import ChangePasswordPage from '@ui/components/page/ChangePasswordPage'
const MyApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyle />
        <MyApp>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/reset" element={<ResetPasswordPage />}></Route>
              <Route path="/change" element={<ChangePasswordPage />}></Route>
            </Routes>
          </BrowserRouter>
        </MyApp>
      </ThemeProvider>
    </>
  )
}

export default App
