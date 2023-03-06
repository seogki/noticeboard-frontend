import { FC } from 'react'
import FormInput, { FormInputProps } from '@components/molecules/FormInput'
import * as OS from './style'
import Button, { ButtonProps } from '@components/atoms/Button'
interface LoginFormProps {
  email: FormInputProps
  password: FormInputProps
  submitBtn: ButtonProps
}

const LoginForm: FC<LoginFormProps> = (
  loginFormProps: LoginFormProps
): JSX.Element => {
  return (
    <>
      <OS.LoginFormContainer>
        <FormInput {...loginFormProps.email} />
        <FormInput {...loginFormProps.password} />
        <Button {...loginFormProps.submitBtn} />
      </OS.LoginFormContainer>
    </>
  )
}

export default LoginForm
