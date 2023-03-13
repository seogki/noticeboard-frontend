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
import LinkButton, { LinkButtonProps } from '../molecules/LinkButton'
import MuiGrid from '../atoms/MuiGrid'

export interface ResetPasswordFormProps {
  container: ContainerProps
  upperBox: BoxProps
  innerBox: CustomFormBoxProps
  avatar: AvatarProps
  typography: CustomTypographyProps
  emailTextField: TextFieldProps
  submitBtn: CustomButtonProps
  gridContainer?: GridProps
  gridFirstItem?: GridProps
  gridSecondItem?: GridProps
  changePasswordLink: LinkButtonProps
  signUpLink: LinkButtonProps
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = (
  props: ResetPasswordFormProps
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
            <MuiTextField {...props.emailTextField} />
            <MuiButton {...props.submitBtn}></MuiButton>
          </MuiFormBox>
          <MuiGrid {...props.gridContainer}>
            <MuiGrid {...props.gridFirstItem}>
              <LinkButton {...props.changePasswordLink} />
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

export default ResetPasswordForm
