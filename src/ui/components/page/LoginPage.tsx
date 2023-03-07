import { Message } from '@interface/base'
import { login } from '@network/auth'
import { setLoginState } from '@redux/authSlice'
import { useAppDispatch } from '@redux/store'
import MyHeader from '@ui/Header/MyHeader'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../organisms/LoginForm'
import LoginTemplate from '../templates/LoginTemplate'

const LoginPage: FC = (): JSX.Element => {
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

  const LoginFormProps = {
    email: {
      inputName: '계정',
      value: values.memberEmail,
      name: 'memberEmail',
      onChange: handleChange,
      placeholder: '이메일을 입력해주세요',
      labelProps: {
        name: '계정',
      },
    },
    password: {
      inputName: '패스워드',
      value: values.memberPassword,
      placeholder: '8~12자리 비밀번호를 입력해주세요',
      type: 'password',
      onChange: handleChange,
      name: 'memberPassword',
      labelProps: {
        name: '패스워드',
      },
    },
    submitBtn: {
      name: '로그인',
      onClick: handleSubmit,
    },
    signUpBtn: {
      name: '회원가입',
    },
    title: {
      name: '로그인',
      isCenter: true,
    },
  }

  return (
    <>
      <LoginTemplate
        header={<MyHeader />}
        content={<LoginForm {...LoginFormProps} />}
      ></LoginTemplate>
    </>
  )
}

export default LoginPage
