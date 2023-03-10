import { ElementType, FC, FormEventHandler } from 'react'
import { Box, BoxProps } from '@mui/material'

export interface CustomFormBoxProps {
  component: ElementType<any>
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const MuiFormBox: FC<CustomFormBoxProps> = (props: CustomFormBoxProps) => {
  return (
    <>
      <Box {...props}></Box>
    </>
  )
}

export default MuiFormBox
