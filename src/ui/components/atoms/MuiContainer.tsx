import { FC } from 'react'
import { Container, ContainerProps } from '@mui/material'

const MuiContainer: FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <>
      <Container {...props}></Container>
    </>
  )
}

export default MuiContainer
