import { Stack, StackProps } from '@mui/material'
import { FC } from 'react'

const MuiStack: FC<StackProps> = (props: StackProps) => {
  return (
    <>
      <Stack {...props}></Stack>
    </>
  )
}

export default MuiStack
