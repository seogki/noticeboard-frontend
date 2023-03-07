import { FC } from 'react'
import FormInput, { FormInputProps } from '@components/molecules/FormInput'
import * as OS from './style'
import FormButton, { FormButtonProps } from '@components/molecules/FormButton'
import FormTitle, { FormTitleProps } from '@components/molecules/FormTitle'
import { Link } from 'react-router-dom'
interface LoginFormProps {
  title: FormTitleProps
  email: FormInputProps
  password: FormInputProps
  submitBtn: FormButtonProps
  signUpBtn: FormButtonProps
}

const LoginForm: FC<LoginFormProps> = (
  loginFormProps: LoginFormProps
): JSX.Element => {
  return (
    <>
      <FormTitle {...loginFormProps.title} />
      <OS.FormInputContainer>
        <FormInput {...loginFormProps.email} />
        <FormInput {...loginFormProps.password} />
        <FormButton {...loginFormProps.submitBtn} />
        <Link to="/Register" style={{ display: 'contents' }}>
          <FormButton {...loginFormProps.signUpBtn} />
        </Link>
      </OS.FormInputContainer>
    </>
  )
}

export default LoginForm
