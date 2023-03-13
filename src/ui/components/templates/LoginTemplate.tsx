import { FC } from 'react'
import * as TS from './style'
import MuiContainer from '../atoms/MuiContainer'
import { ContainerProps } from '@mui/material'
export interface LoginTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
  container: ContainerProps
}

const LoginTemplate: FC<LoginTemplateProps> = (props: LoginTemplateProps) => {
  return (
    <>
      <MuiContainer {...props.container}>
        {/* <TS.Header>{props.header}</TS.Header> */}
        <TS.Content>{props.content}</TS.Content>
      </MuiContainer>
    </>
  )
}

export default LoginTemplate
