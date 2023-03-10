import { Button, ButtonProps } from '@mui/material'
import { FC } from 'react'
import { Link as RouterLink, To } from 'react-router-dom'
export interface RouterLinkButtonProps extends ButtonProps {
  name?: string
  to: To
}

const RouterLinkButton: FC<RouterLinkButtonProps> = ({
  name,
  to,
}: RouterLinkButtonProps) => {
  return (
    <>
      <Button component={RouterLink} to={to}>
        {name}
      </Button>
    </>
  )
}

export default RouterLinkButton
