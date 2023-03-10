import { FC } from 'react'
import * as TS from './style'
import MuiContainer from '../atoms/MuiContainer'
export interface LoginTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const LoginTemplate: FC<LoginTemplateProps> = (props: LoginTemplateProps) => {
  return (
    <>
      <MuiContainer>
        <TS.Header>{props.header}</TS.Header>
        <TS.Content>{props.content}</TS.Content>
      </MuiContainer>
    </>
  )
}

export default LoginTemplate
