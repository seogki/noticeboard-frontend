import { useState } from 'react'
import './Login.scoped.scss'
import { login } from '@network/auth'
import { Link } from 'react-router-dom'
function Login() {
  const [values, setValues] = useState({
    memberEmail: '',
    memberPassword: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const payload = { data: values }
    const result = await login(payload)
    console.log(result);
  }
  return (
    <div className="login flex-center">
      <h2 className="tac">LOGIN</h2>
      <form className="container flex-center-left">
        <label className="fs-5">계정</label>
        <input
          className="memberEmail"
          name="memberEmail"
          value={values.memberEmail}
          onChange={handleChange}
        />
        <label className="fs-5">비밀번호</label>
        <input
          className="memberPassword"
          type="password"
          name="memberPassword"
          value={values.memberPassword}
          onChange={handleChange}
        />
        <button
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className="fs-4"
        >
          로그인
        </button>
        <Link to="/Register" style={{ display: 'contents' }}>
          <button className="fs-4">회원가입</button>
        </Link>
      </form>
    </div>
  )
}

export default Login
