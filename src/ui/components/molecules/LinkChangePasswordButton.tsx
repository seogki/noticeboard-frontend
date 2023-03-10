import { FC } from 'react'
import RouterLinkButton, {
  RouterLinkButtonProps,
} from '../atoms/button/RouterLinkButton'
export interface LinkChangePasswordButtonProps {
  linkButton: RouterLinkButtonProps
}

const LinkChangePasswordButton: FC<LinkChangePasswordButtonProps> = (
  props: LinkChangePasswordButtonProps
) => {
  return (
    <>
      <RouterLinkButton {...props.linkButton}></RouterLinkButton>
    </>
  )
}

export default LinkChangePasswordButton
