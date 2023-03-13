import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButtonProps } from '@mui/material/IconButton'
import { FC } from 'react'
import RouterLinkButton, {
  RouterLinkButtonProps,
} from '../atoms/button/RouterLinkButton'
import MuiIconButton from '../atoms/MuiIconButton'
// import { To, useNavigate } from 'react-router-dom'
export interface UserIconButtonProps {
  iconButton?: IconButtonProps
}

const UserIconButton: FC<UserIconButtonProps> = (
  props: UserIconButtonProps
) => {
  return (
    <>
      <MuiIconButton {...props.iconButton}>
        <AccountCircleIcon />
      </MuiIconButton>
    </>
  )
}

export default UserIconButton
