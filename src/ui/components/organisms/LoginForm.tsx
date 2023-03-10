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
  GridProps,
} from '@mui/material'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import MuiAvatar from '../atoms/MuiAvatar'
import MuiTextField from '../atoms/MuiTextField'
import MuiFormControlLabel from '../atoms/MuiFormControlLabel'
import MuiFormBox, { CustomFormBoxProps } from '../atoms/MuiFormBox'
import MuiGrid from '../atoms/MuiGrid'
import LinkForgetPasswordButton, {
  LinkForgetPasswordButtonProps,
} from '../molecules/LinkForgetPasswordButton'
import LinkSignUpButton, {
  LinkSignUpButtonProps,
} from '../molecules/LinkSignUpButton'
interface LoginFormProps {
  container: ContainerProps
  upperBox: BoxProps
  innerBox: CustomFormBoxProps
  avatar: AvatarProps
  typography: CustomTypographyProps
  emailTextField: TextFieldProps
  passwordTextField: TextFieldProps
  formControlLabel: FormControlLabelProps
  submitBtn: CustomButtonProps
  gridContainer?: GridProps
  gridFirstItem?: GridProps
  gridSecondItem?: GridProps
  forgetPasswordLink: LinkForgetPasswordButtonProps
  signUpLink: LinkSignUpButtonProps
}

const LoginForm: FC<LoginFormProps> = (props: LoginFormProps): JSX.Element => {
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
            <MuiTextField {...props.passwordTextField} />
            <MuiFormControlLabel {...props.formControlLabel} />
            <MuiButton {...props.submitBtn}></MuiButton>
          </MuiFormBox>
          <MuiGrid {...props.gridContainer}>
            <MuiGrid {...props.gridFirstItem}>
              <LinkForgetPasswordButton {...props.forgetPasswordLink} />
            </MuiGrid>
            <MuiGrid {...props.gridSecondItem}>
              <LinkSignUpButton {...props.signUpLink} />
            </MuiGrid>
          </MuiGrid>
        </MuiBox>
      </MuiContainer>
    </>
  )
}

export default LoginForm
