import { useState } from 'react'
import './Register.scoped.scss'
import { signUp } from '@network/auth'
import { Message } from '@interface/base'
import {useNavigate} from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    memberEmail: '',
    memberNickname: '',
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
    const result : Message = await signUp(payload)
    console.log(result);
    if(result.status === "OK") {
      navigate("/login");
    }
  }
  return (
    <div className="register flex-center">
      <h2 className="tac">Register</h2>
      <form className="container flex-center-left">
        <label className="fs-5">이메일</label>
        <input
          className="memberEmail"
          name="memberEmail"
          value={values.memberEmail}
          onChange={handleChange}
        />
        <label className="fs-5">닉네임</label>
        <input
          className="memberNickname"
          name="memberNickname"
          value={values.memberNickname}
          onChange={handleChange}
        />
        <label className="fs-5">비밀번호</label>
        <input
          className="memberPassword"
          name="memberPassword"
          type="password"
          value={values.memberPassword}
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
