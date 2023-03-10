import { FC } from 'react'
import RouterLinkButton, {
  RouterLinkButtonProps,
} from '../atoms/button/RouterLinkButton'
export interface LinkSignUpButtonProps {
  linkButton: RouterLinkButtonProps
}

const LinkSignUpButton: FC<LinkSignUpButtonProps> = (
  props: LinkSignUpButtonProps
) => {
  return (
    <>
      <RouterLinkButton {...props.linkButton}></RouterLinkButton>
    </>
  )
}

export default LinkSignUpButton
