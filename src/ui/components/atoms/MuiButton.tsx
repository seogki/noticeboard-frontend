import { Button, ButtonProps } from '@mui/material'
import { FC } from 'react'

export interface CustomButtonProps extends ButtonProps {
  name: string
}

const MuiButton: FC<CustomButtonProps> = (props: CustomButtonProps) => {
  return (
    <>
      <Button {...props}>{props.name}</Button>
    </>
  )
}

export default MuiButton
