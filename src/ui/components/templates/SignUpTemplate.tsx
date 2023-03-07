import { FC } from 'react'
import * as TS from './style'
export interface SignUpemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const SignUpTemplate: FC<SignUpemplateProps> = (
  signUpemplateProps: SignUpemplateProps
) => {
  return (
    <>
      <TS.TemplateContainer>
        <TS.Container>
          <TS.Header>{signUpemplateProps.header}</TS.Header>
          <TS.Content>{signUpemplateProps.content}</TS.Content>
        </TS.Container>
      </TS.TemplateContainer>
    </>
  )
}

export default SignUpTemplate
