import { FC } from 'react'
import * as TS from './style'
import MuiContainer from '../atoms/MuiContainer'
export interface ResetPasswordTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const ResetPasswordTemplate: FC<ResetPasswordTemplateProps> = (
  props: ResetPasswordTemplateProps
) => {
  return (
    <>
      <MuiContainer>
        <TS.Header>{props.header}</TS.Header>
        <TS.Content>{props.content}</TS.Content>
      </MuiContainer>
    </>
  )
}

export default ResetPasswordTemplate
