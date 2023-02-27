import { useState } from 'react'
import './Login.scoped.scss'
import {postUser} from "@network/login";
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const payload = {data: values};
    postUser(payload);
  }
  return (
    <div className="login">
      <h2 className="tac">Login</h2>
      <form className="container flex-center-left">
        <label className="fs-5">계정</label>
        <input
          className="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label className="fs-5">비밀번호</label>
        <input
          className="pwd"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" value="Submit" onClick={handleSubmit}>
          로그인
        </button>
      </form>
    </div>
  )
}

export default Login
