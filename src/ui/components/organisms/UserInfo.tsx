import { CssBaseline } from '@mui/material'
import { ContainerProps } from '@mui/material/Container'
import { BoxProps } from '@mui/system'
import { FC } from 'react'
import MuiAvatar from '../atoms/MuiAvatar'
import MuiBox from '../atoms/MuiBox'
import MuiContainer from '../atoms/MuiContainer'

export interface UserInfoProps {
  container: ContainerProps
  box: BoxProps
}

const UserInfo: FC<UserInfoProps> = (props: UserInfoProps) => {
  return (
    <>
      <MuiContainer {...props.container}>
        <CssBaseline />
        <MuiBox {...props.box}></MuiBox>
      </MuiContainer>
    </>
  )
}

export default UserInfo
