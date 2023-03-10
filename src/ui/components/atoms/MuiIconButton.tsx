import { IconButton, IconButtonProps } from '@mui/material'
import { FC } from 'react'

export interface CustomIconButtonProps extends IconButtonProps {
  name?: string
}

const MuiIconButton: FC<CustomIconButtonProps> = (
  props: CustomIconButtonProps
) => {
  return (
    <>
      <IconButton {...props}></IconButton>
    </>
  )
}

export default MuiIconButton
