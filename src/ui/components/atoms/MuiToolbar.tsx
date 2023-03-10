import { FC } from 'react'
import { Toolbar, ToolbarProps } from '@mui/material'

const MuiToolbar: FC<ToolbarProps> = (props: ToolbarProps) => {
  return (
    <>
      <Toolbar {...props}></Toolbar>
    </>
  )
}

export default MuiToolbar
