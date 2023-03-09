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
  LinkProps,
} from '@mui/material'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import MuiAvatar from '../atoms/MuiAvatar'
import MuiTextField from '../atoms/MuiTextField'
import MuiFormControlLabel from '../atoms/MuiFormControlLabel'
// import MuiGrid from '../atoms/MuiGrid'
// import MuiLink from '../atoms/MuiLink'
interface LoginFormProps {
  container: ContainerProps
  upperBox: BoxProps
  innerBox: BoxProps
  avatar: AvatarProps
  typography: CustomTypographyProps
  emailTextField: TextFieldProps
  passwordTextField: TextFieldProps
  formControlLabel: FormControlLabelProps
  submitBtn: CustomButtonProps
  gridContainer?: GridProps
  gridItem?: GridProps
  link?: LinkProps
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
          <MuiBox {...props.innerBox}>
            <MuiTextField {...props.emailTextField} />
            <MuiTextField {...props.passwordTextField} />
            <MuiFormControlLabel {...props.formControlLabel} />
            <MuiButton {...props.submitBtn}></MuiButton>
          </MuiBox>
          {/* <MuiGrid {...props.gridContainer}>
            <MuiGrid {...props.gridItem}>
              <MuiLink {...props.link}></MuiLink>
            </MuiGrid>
          </MuiGrid> */}
        </MuiBox>
      </MuiContainer>
    </>
  )
}

export default LoginForm
