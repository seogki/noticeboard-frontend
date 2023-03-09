import { FormControlLabel, FormControlLabelProps } from '@mui/material'
import { FC } from 'react'

const MuiFormControlLabel: FC<FormControlLabelProps> = (
  props: FormControlLabelProps
) => {
  return (
    <>
      <FormControlLabel {...props} />
    </>
  )
}

export default MuiFormControlLabel
