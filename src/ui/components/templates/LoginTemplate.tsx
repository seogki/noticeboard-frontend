import { FC } from 'react'
import * as TS from './style'
export interface LoginTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const LoginTemplate: FC<LoginTemplateProps> = (
  loginTemplateProps: LoginTemplateProps
) => {
  return (
    <>
      <TS.TemplateContainer>
        <TS.Container>
          <TS.Header>{loginTemplateProps.header}</TS.Header>
          <TS.Content>{loginTemplateProps.content}</TS.Content>
        </TS.Container>
      </TS.TemplateContainer>
    </>
  )
}

export default LoginTemplate
