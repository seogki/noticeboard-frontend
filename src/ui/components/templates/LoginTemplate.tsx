import { FC } from 'react'
import * as TS from './style'
import Container from '@mui/material/Container'
export interface LoginTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const LoginTemplate: FC<LoginTemplateProps> = (props: LoginTemplateProps) => {
  return (
    <>
      <Container disableGutters={true}>
        <TS.Header>{props.header}</TS.Header>
        <TS.Content>{props.content}</TS.Content>
      </Container>
    </>
  )
}

export default LoginTemplate
