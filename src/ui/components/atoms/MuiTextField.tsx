import { TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

const MuiTextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <>
      <TextField {...props}></TextField>
    </>
  )
}

export default MuiTextField
