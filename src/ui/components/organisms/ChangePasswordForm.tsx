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
import LinkLoginButton, {
  LinkLoginButtonProps,
} from '../molecules/LinkLoginButton'
import MuiGrid from '../atoms/MuiGrid'
import LinkSignUpButton, {
  LinkSignUpButtonProps,
} from '../molecules/LinkSignUpButton'
import LinkButton, { LinkButtonProps } from '../molecules/LinkButton'

export interface ChangePasswordFormProps {
  container: ContainerProps
  upperBox: BoxProps
  innerBox: CustomFormBoxProps
  avatar: AvatarProps
  typography: CustomTypographyProps
  oldPasswordTextField: TextFieldProps
  newPasswordTextField: TextFieldProps
  correctPasswordTextField: TextFieldProps
  submitBtn: CustomButtonProps
  gridContainer?: GridProps
  gridFirstItem?: GridProps
  gridSecondItem?: GridProps
  resetPasswordLink: LinkButtonProps
  signUpLink: LinkSignUpButtonProps
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = (
  props: ChangePasswordFormProps
) => {
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
            <MuiTextField {...props.oldPasswordTextField} />
            <MuiTextField {...props.newPasswordTextField} />
            <MuiTextField {...props.correctPasswordTextField} />
            <MuiButton {...props.submitBtn}></MuiButton>
          </MuiFormBox>
          <MuiGrid {...props.gridContainer}>
            <MuiGrid {...props.gridFirstItem}>
              <LinkButton {...props.resetPasswordLink} />
            </MuiGrid>
            <MuiGrid {...props.gridSecondItem}>
              <LinkButton {...props.signUpLink} />
            </MuiGrid>
          </MuiGrid>
        </MuiBox>
      </MuiContainer>
    </>
  )
}

export default ChangePasswordForm
