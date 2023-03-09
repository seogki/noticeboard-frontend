import { FC } from 'react'
import { Box, BoxProps } from '@mui/material'

const MuiBox: FC<BoxProps> = (props: BoxProps) => {
  return (
    <>
      <Box {...props}></Box>
    </>
  )
}

export default MuiBox
