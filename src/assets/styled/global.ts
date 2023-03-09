import { createGlobalStyle } from 'styled-components'
import * as V from './variable'
//* styled 형식으로 뺴지않으면 prettier 적용이 안됨
const styled = { createGlobalStyle }
export const GlobalStyle = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root,
  .App {
    overflow: hidden;
    /* font-family: 'Nanum Gothic', sans-serif; */
    width: 100%;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  input,
  textarea,
  select {
    //* IOS 에선 16폰트 사이즈를 고정해야 input 키보드 생성시 자동 zoom 안됨
    font-size: 16px;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input {
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${V.G_PRIMARY_TEXT_COLOR};
  }
`
