import { useState, useReducer } from 'react'
import './Login.scoped.scss'
import { login } from '@network/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@redux/store'
import { setLoginState } from '@redux/authSlice'
import { Message } from '@interface/base'
import Title from '@components/atoms/Title'
import FormInput from '@ui/components/molecules/FormInput'
function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
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
    e.stopPropagation()
    e.preventDefault()
    const payload = { data: values }
    const result: Message = await login(payload)
    if (result && result.data !== null && result.data.accessToken) {
      localStorage.setItem('access-token', result.data.accessToken)
      localStorage.setItem('refresh-token', result.data.refreshToken)
      localStorage.setItem('grantType', result.data.grantType)
      dispatch(setLoginState(true))
      navigate('/')
    } else {
      alert('존재하지않는 계정입니다')
      //wrong Password or email
    }
  }
  const TitleObj = { title: '로그인', isCenter: true }
  const formInputData = {
    inputName: 'memberEmail',
    placeholder: '이메일을 입력해주세요',
    values: values.memberEmail,
    onchange: handleChange,
    labelProps: {
      name: '계정',
    },
  }
  return (
    <div className="login flex-center">
      {/* <Title {...TitleObj} /> */}
      <form className="container flex-center-left">
        {/* <label className="fs-5">계정</label> */}
        <FormInput {...formInputData}></FormInput>
        {/* <input
          className="memberEmail"
          name="memberEmail"
          placeholder="이메일을 입력해주세요"
          value={values.memberEmail}
          onChange={handleChange}
        /> */}
        <label className="fs-5">비밀번호</label>
        <input
          className="memberPassword"
          type="password"
          placeholder="8 ~ 12자리의 비밀번호를 입력해주세요"
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
