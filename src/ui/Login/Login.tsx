import { useState } from 'react'
import './Login.scoped.scss'
function Login() {
  const [id, setId] = useState('')
  const [pwd, setPwd] = useState('')
  return (
    <div className="login">
      <h2 className="tac">Login</h2>
      <form className="container flex-center-left">
        <label>계정</label>
        <input className="id" value={id} />
        <label>비밀번호</label>
        <input className="pwd" type="password" value={pwd} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login
