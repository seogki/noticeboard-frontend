import { Checkbox, CheckboxProps } from '@mui/material'
import { FC } from 'react'

const MuiCheckbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <>
      <Checkbox {...props}>{props.name}</Checkbox>
    </>
  )
}

export default MuiCheckbox
