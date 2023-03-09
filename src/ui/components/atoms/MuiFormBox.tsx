import { FC, FormEventHandler } from 'react'
import { Box, BoxProps } from '@mui/material'

export interface FormBoxProps {
  component?: string
  onSubmit?: (e: FormEventHandler) => Promise<void>
}

const MuiFormBox: FC<FormBoxProps> = (props: FormBoxProps) => {
  return (
    <>
      <Box {...props}></Box>
    </>
  )
}

export default MuiFormBox
