import { FC } from 'react'
import * as TS from './style'

export interface MainTemplateProps {
  header?: React.ReactNode
  content?: React.ReactNode
}

const MainTemplate: FC<MainTemplateProps> = (
  mainTemplateProps: MainTemplateProps
) => {
  return (
    <>
      <TS.TemplateContainer>
        <TS.Container>
          <TS.Header>{mainTemplateProps.header}</TS.Header>
          <TS.Content>{mainTemplateProps.content}</TS.Content>
        </TS.Container>
      </TS.TemplateContainer>
    </>
  )
}

export default MainTemplate
