import { AppBar, AppBarProps } from '@mui/material'
import { FC } from 'react'

const MuiAppBar: FC<AppBarProps> = (props: AppBarProps) => {
  return (
    <>
      <AppBar {...props}></AppBar>
    </>
  )
}

export default MuiAppBar
