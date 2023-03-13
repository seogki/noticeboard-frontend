import { FC } from 'react'
import * as TS from './style'
import MuiContainer from '../atoms/MuiContainer'
import { ContainerProps } from '@mui/material'
export interface ResetPasswordTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
  container: ContainerProps
}

const ResetPasswordTemplate: FC<ResetPasswordTemplateProps> = (
  props: ResetPasswordTemplateProps
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

export default ResetPasswordTemplate
