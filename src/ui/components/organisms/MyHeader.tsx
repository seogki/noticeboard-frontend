import { FC } from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import Box, { BoxProps } from '@mui/material/Box'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button, { ButtonProps } from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import MuiBox from '../atoms/MuiBox'
import MuiAppBar from '../atoms/MuiAppBar'
import MuiToolbar from '../atoms/MuiToolbar'
import MuiIconButton, { CustomIconButtonProps } from '../atoms/MuiIconButton'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'

export interface MyHeaderProps {
  box: BoxProps
  appBar: AppBarProps
  toolbar: ToolbarProps
  iconButton: CustomIconButtonProps
  typography: CustomTypographyProps
  button: CustomButtonProps
}

const MyHeader: FC<MyHeaderProps> = (props: MyHeaderProps) => {
  return (
    <>
      <MuiBox {...props.box}>
        <MuiAppBar {...props.appBar}>
          <MuiToolbar {...props.toolbar}>
            <MuiIconButton {...props.iconButton}>
              <MenuIcon />
            </MuiIconButton>
            <MuiTypography {...props.typography}></MuiTypography>
            <MuiButton {...props.button}></MuiButton>
          </MuiToolbar>
        </MuiAppBar>
      </MuiBox>
    </>
  )
}

export default MyHeader
