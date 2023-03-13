import { Button, ButtonProps } from '@mui/material'
import { FC } from 'react'
import { Link as RouterLink, To } from 'react-router-dom'
export interface RouterLinkButtonProps extends ButtonProps {
  name?: string
  to: To
  variant?: 'outlined' | 'text' | 'contained'
}

const RouterLinkButton: FC<RouterLinkButtonProps> = ({
  name,
  to,
  variant,
  startIcon,
  color,
}: RouterLinkButtonProps) => {
  return (
    <>
      <Button
        component={RouterLink}
        to={to}
        variant={variant}
        startIcon={startIcon}
        color={color}
      >
        {name}
      </Button>
    </>
  )
}

export default RouterLinkButton
