import { ButtonProps } from '@mui/material/Button'
import { FC } from 'react'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import { Link as RouterLink } from 'react-router-dom'
import RouterLinkButton, {
  RouterLinkButtonProps,
} from '../atoms/button/RouterLinkButton'
export interface LinkLoginButtonProps {
  linkButton: RouterLinkButtonProps
}

const LinkLoginButton: FC<LinkLoginButtonProps> = (
  props: LinkLoginButtonProps
) => {
  return (
    <>
      <RouterLinkButton {...props.linkButton}></RouterLinkButton>
    </>
  )
}

export default LinkLoginButton
