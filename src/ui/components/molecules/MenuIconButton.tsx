import { IconButtonProps } from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { FC } from 'react'
import MuiIconButton from '../atoms/MuiIconButton'

export interface MenuIconButtonProps {
  iconButton: IconButtonProps
}

const MenuIconButton: FC<MenuIconButtonProps> = (
  props: MenuIconButtonProps
) => {
  return (
    <>
      <MuiIconButton {...props.iconButton}>
        <MenuIcon />
      </MuiIconButton>
    </>
  )
}

export default MenuIconButton
