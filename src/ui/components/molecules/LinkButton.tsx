import { FC } from 'react'
import RouterLinkButton, {
  RouterLinkButtonProps,
} from '../atoms/button/RouterLinkButton'
export interface LinkButtonProps {
  linkButton: RouterLinkButtonProps
}

const LinkButton: FC<LinkButtonProps> = (props: LinkButtonProps) => {
  return (
    <>
      <RouterLinkButton {...props.linkButton}></RouterLinkButton>
    </>
  )
}

export default LinkButton
