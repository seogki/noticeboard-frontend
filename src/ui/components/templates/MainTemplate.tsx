import { ContainerProps } from '@mui/system/Container'
import { FC } from 'react'
import MuiContainer from '../atoms/MuiContainer'
import * as TS from './style'
export interface MainTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
  container: ContainerProps
}

const MainTemplate: FC<MainTemplateProps> = (props: MainTemplateProps) => {
  return (
    <>
      <MuiContainer {...props.container}>
        <TS.Header>{props.header}</TS.Header>
        <MuiContainer>
          <TS.Content>{props.content}</TS.Content>
        </MuiContainer>
      </MuiContainer>
    </>
  )
}

export default MainTemplate
