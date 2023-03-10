import { FC } from 'react'
import * as TS from './style'
import MuiContainer from '../atoms/MuiContainer'
export interface ChangePasswordTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const ChangePasswordTemplate: FC<ChangePasswordTemplateProps> = (
  props: ChangePasswordTemplateProps
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

export default ChangePasswordTemplate
