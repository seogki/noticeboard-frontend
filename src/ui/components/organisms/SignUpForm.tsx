import { FC } from 'react'
import MuiContainer from '../atoms/MuiContainer'
import CssBaseline from '@mui/material/CssBaseline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import MuiBox from '../atoms/MuiBox'
import {
  BoxProps,
  ContainerProps,
  AvatarProps,
  TextFieldProps,
  FormControlLabelProps,
} from '@mui/material'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import MuiAvatar from '../atoms/MuiAvatar'
import MuiTextField from '../atoms/MuiTextField'
import MuiFormControlLabel from '../atoms/MuiFormControlLabel'
import MuiFormBox, { CustomFormBoxProps } from '../atoms/MuiFormBox'

export interface SignUpFormProps {
  container: ContainerProps
  upperBox: BoxProps
  innerBox: CustomFormBoxProps
  avatar: AvatarProps
  typography: CustomTypographyProps
  emailTextField: TextFieldProps
  nicknameTextField: TextFieldProps
  passwordTextField: TextFieldProps
  submitBtn: CustomButtonProps
}

const SignUpForm: FC<SignUpFormProps> = (props: SignUpFormProps) => {
  return (
    <>
      <MuiContainer {...props.container}>
        <CssBaseline />
        <MuiBox {...props.upperBox}>
          <MuiAvatar {...props.avatar}>
            <LockOutlinedIcon />
          </MuiAvatar>
          <MuiTypography {...props.typography}></MuiTypography>
          <MuiFormBox {...props.innerBox}>
            <MuiTextField {...props.emailTextField} />
            <MuiTextField {...props.nicknameTextField} />
            <MuiTextField {...props.passwordTextField} />
            <MuiButton {...props.submitBtn}></MuiButton>
          </MuiFormBox>
        </MuiBox>
      </MuiContainer>
    </>
  )
}

export default SignUpForm
