import { ContainerProps } from '@mui/material'
import { FC } from 'react'
import MuiContainer from '../atoms/MuiContainer'
import * as TS from './style'
export interface SignUpTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
  container: ContainerProps
}

const SignUpTemplate: FC<SignUpTemplateProps> = (
  props: SignUpTemplateProps
) => {
  return (
    <>
      <MuiContainer {...props.container}>
        {/* <TS.Header>{props.header}</TS.Header> */}
        <TS.Content>{props.content}</TS.Content>
      </MuiContainer>
    </>
  )
}

export default SignUpTemplate
