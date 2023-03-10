import { Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'

export interface CustomTypographyProps extends TypographyProps {
  name: String
}

const MuiTypography: FC<CustomTypographyProps> = (
  props: CustomTypographyProps
) => {
  return (
    <>
      <Typography {...props}>{props.name}</Typography>
    </>
  )
}

export default MuiTypography
