import { FC } from 'react'
import * as OS from './style'
import FormInput, { FormInputProps } from '@components/molecules/FormInput'
import FormButton, { FormButtonProps } from '@components/molecules/FormButton'
import FormTitle, { FormTitleProps } from '@components/molecules/FormTitle'
export interface SignUpFormProps {
  email: FormInputProps
  nickname: FormInputProps
  password: FormInputProps
  signUpBtn: FormButtonProps
  title: FormTitleProps
}
const SignUpForm: FC<SignUpFormProps> = (signUpFormProps: SignUpFormProps) => {
  return (
    <>
      <FormTitle {...signUpFormProps.title} />
      <OS.FormInputContainer>
        <FormInput {...signUpFormProps.email} />
        <FormInput {...signUpFormProps.nickname} />
        <FormInput {...signUpFormProps.password} />
        <FormButton {...signUpFormProps.signUpBtn} />
      </OS.FormInputContainer>
    </>
  )
}

export default SignUpForm
