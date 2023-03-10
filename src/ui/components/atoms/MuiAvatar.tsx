import { Avatar, AvatarProps } from '@mui/material'
import { FC } from 'react'

const MuiAvatar: FC<AvatarProps> = (props: AvatarProps) => {
  return (
    <>
      <Avatar {...props}></Avatar>
    </>
  )
}

export default MuiAvatar
