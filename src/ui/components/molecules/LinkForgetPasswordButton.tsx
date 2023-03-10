import { FC } from 'react'
import RouterLinkButton, {
  RouterLinkButtonProps,
} from '../atoms/button/RouterLinkButton'
export interface LinkForgetPasswordButtonProps {
  linkButton: RouterLinkButtonProps
}

const LinkForgetPasswordButton: FC<LinkForgetPasswordButtonProps> = (
  props: LinkForgetPasswordButtonProps
) => {
  return (
    <>
      <RouterLinkButton {...props.linkButton}></RouterLinkButton>
    </>
  )
}

export default LinkForgetPasswordButton
