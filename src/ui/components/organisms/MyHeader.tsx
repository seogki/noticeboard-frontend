import { FC } from 'react'
import { AppBarProps } from '@mui/material/AppBar'
import { BoxProps } from '@mui/material/Box'
import { ToolbarProps } from '@mui/material/Toolbar'
import MuiBox from '../atoms/MuiBox'
import MuiAppBar from '../atoms/MuiAppBar'
import MuiToolbar from '../atoms/MuiToolbar'
import MuiTypography, { CustomTypographyProps } from '../atoms/MuiTypography'
import MenuIconButton, {
  MenuIconButtonProps,
} from '../molecules/MenuIconButton'
import LinkButton, { LinkButtonProps } from '../molecules/LinkButton'
import UserIconButton, {
  UserIconButtonProps,
} from '../molecules/UserIconButton'
import MuiStack from '../atoms/MuiStack'

export interface MyHeaderProps {
  box: BoxProps
  appBar: AppBarProps
  toolbar: ToolbarProps
  menuButton: MenuIconButtonProps
  typography: CustomTypographyProps
  linkLoginButton: LinkButtonProps
  linkSignupButton: LinkButtonProps
  userIconButton: UserIconButtonProps
  options: { isLogin: boolean }
}

const MyHeader: FC<MyHeaderProps> = (props: MyHeaderProps) => {
  return (
    <>
      <MuiBox {...props.box}>
        <MuiAppBar {...props.appBar}>
          <MuiToolbar {...props.toolbar}>
            {/* <MenuIconButton {...props.menuButton}></MenuIconButton> */}
            <MuiTypography {...props.typography}></MuiTypography>
            {props.options.isLogin ? (
              <UserIconButton {...props.userIconButton}></UserIconButton>
            ) : (
              <>
                <MuiStack spacing={1} direction={'row'}>
                  <LinkButton {...props.linkLoginButton}></LinkButton>
                  <LinkButton {...props.linkSignupButton}></LinkButton>
                </MuiStack>
              </>
            )}
          </MuiToolbar>
        </MuiAppBar>
      </MuiBox>
    </>
  )
}

export default MyHeader
