import {
  AvatarProps,
  ButtonProps,
  CssBaseline,
  StackProps,
} from '@mui/material'
import { ContainerProps } from '@mui/material/Container'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { BoxProps } from '@mui/system'
import { FC } from 'react'
import MuiAvatar from '../atoms/MuiAvatar'
import MuiBox from '../atoms/MuiBox'
import MuiContainer from '../atoms/MuiContainer'
import MuiStack from '../atoms/MuiStack'
import LinkButton, { LinkButtonProps } from '../molecules/LinkButton'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'

export interface UserInfoProps {
  container: ContainerProps
  box: BoxProps
  avatar: AvatarProps
  options?: {
    memberEmail?: string
    memberNickname?: string
  }
  changePasswordBtn: CustomButtonProps
  logoutBtn: CustomButtonProps
}

const UserInfo: FC<UserInfoProps> = (props: UserInfoProps) => (
  <>
    <MuiContainer {...props.container}>
      <CssBaseline />
      <MuiBox {...props.box}>
        <MuiStack spacing={2}>
          <MuiAvatar
            sx={{
              textAlign: 'center',
              m: 1,
              bgcolor: 'primary.main',
              margin: 'auto',
            }}
          >
            <AccountCircleIcon />
          </MuiAvatar>
          <MuiBox sx={{ textAlign: 'center' }}>
            {props.options?.memberNickname}
          </MuiBox>
          <MuiBox sx={{ textAlign: 'center' }}>
            {props.options?.memberEmail}
          </MuiBox>
          <MuiButton {...props.changePasswordBtn}></MuiButton>
          <MuiButton {...props.logoutBtn}></MuiButton>
        </MuiStack>
      </MuiBox>
    </MuiContainer>
  </>
)

export default UserInfo
