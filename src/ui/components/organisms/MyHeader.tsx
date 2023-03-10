import { FC } from 'react'
import { AppBarProps } from '@mui/material/AppBar'
import { BoxProps } from '@mui/material/Box'
import { ToolbarProps } from '@mui/material/Toolbar'
import MuiBox from '../atoms/MuiBox'
import MuiAppBar from '../atoms/MuiAppBar'
import MuiToolbar from '../atoms/MuiToolbar'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import MenuIconButton, {
  MenuIconButtonProps,
} from '../molecules/MenuIconButton'
import LinkLoginButton, {
  LinkLoginButtonProps,
} from '../molecules/LinkLoginButton'

export interface MyHeaderProps {
  box: BoxProps
  appBar: AppBarProps
  toolbar: ToolbarProps
  menuButton: MenuIconButtonProps
  typography: CustomTypographyProps
  linkLoginButton: LinkLoginButtonProps
}

const MyHeader: FC<MyHeaderProps> = (props: MyHeaderProps) => {
  return (
    <>
      <MuiBox {...props.box}>
        <MuiAppBar {...props.appBar}>
          <MuiToolbar {...props.toolbar}>
            <MenuIconButton {...props.menuButton}></MenuIconButton>
            <MuiTypography {...props.typography}></MuiTypography>
            <LinkLoginButton {...props.linkLoginButton}></LinkLoginButton>
          </MuiToolbar>
        </MuiAppBar>
      </MuiBox>
    </>
  )
}

export default MyHeader
