import { Grid, GridProps } from '@mui/material'
import { FC } from 'react'

const MuiGrid: FC<GridProps> = (props: GridProps) => {
  return (
    <>
      <Grid {...props}></Grid>
    </>
  )
}

export default MuiGrid
