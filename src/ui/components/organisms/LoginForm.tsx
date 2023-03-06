import { FC } from 'react'
import FormInput, { FormInputProps } from '@components/molecules/FormInput'
import * as OS from './style'
interface LoginFormProps {
  email: FormInputProps
  nickname: FormInputProps
  password: FormInputProps
}

const LoginForm: FC<LoginFormProps> = ({ ...loginFormProps }) => {
  return (
    <>
      <OS.LoginFormContainer>
        <FormInput {...loginFormProps.email} />
        <FormInput {...loginFormProps.nickname} />
        <FormInput {...loginFormProps.password} />
      </OS.LoginFormContainer>
    </>
  )
}

export default LoginForm
