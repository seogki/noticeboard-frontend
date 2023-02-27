import { useState } from 'react'
import './Register.scoped.scss'
import { postUser } from '@network/login'
function Register() {
  const [values, setValues] = useState({
    email: '',
    nickname: '',
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
    const payload = { data: values }
    postUser(payload)
  }
  return (
    <div className="register flex-center">
      <h2 className="tac">Register</h2>
      <form className="container flex-center-left">
        <label className="fs-5">이메일</label>
        <input
          className="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label className="fs-5">닉네임</label>
        <input
          className="nickname"
          name="nickname"
          value={values.nickname}
          onChange={handleChange}
        />
        <label className="fs-5">비밀번호</label>
        <input
          className="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className="fs-4"
        >
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Register
