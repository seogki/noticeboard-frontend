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
  GridProps,
} from '@mui/material'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import MuiAvatar from '../atoms/MuiAvatar'
import MuiTextField from '../atoms/MuiTextField'
import MuiFormBox, { CustomFormBoxProps } from '../atoms/MuiFormBox'
import MuiGrid from '../atoms/MuiGrid'
import LinkButton, { LinkButtonProps } from '../molecules/LinkButton'

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
  gridContainer?: GridProps
  gridFirstItem?: GridProps
  gridSecondItem?: GridProps
  forgetPasswordLink: LinkButtonProps
  loginLink: LinkButtonProps
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
          <MuiGrid {...props.gridContainer}>
            <MuiGrid {...props.gridFirstItem}>
              <LinkButton {...props.forgetPasswordLink} />
            </MuiGrid>
            <MuiGrid {...props.gridSecondItem}>
              <LinkButton {...props.loginLink} />
            </MuiGrid>
          </MuiGrid>
        </MuiBox>
      </MuiContainer>
    </>
  )
}

export default SignUpForm
