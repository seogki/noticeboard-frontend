import MyHeader from '@ui/Header/MyHeader'
import { FC } from 'react'
import LoginForm from '../organisms/LoginForm'
import LoginTemplate from '../templates/LoginTemplate'

const LoginPage: FC = (): JSX.Element => {
  const FormInputProps = {
    email: {
      inputName: '계정',
      placeholder: '이메일을 입력해주세요',
      labelProps: {
        name: '계정',
      },
    },
    password: {
      inputName: '패스워드',
      placeholder: '8~12자리 비밀번호를 입력해주세요',
      type: 'password',
      labelProps: {
        name: '패스워드',
      },
    },
    submitBtn: {
      name: '로그인',
      onClick: () => {},
    },
  }

  return (
    <>
      <LoginTemplate
        header={<MyHeader />}
        content={<LoginForm {...FormInputProps} />}
      ></LoginTemplate>
    </>
  )
}

export default LoginPage
