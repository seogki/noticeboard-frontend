import { FC } from 'react'
import styled from 'styled-components'
interface TitleProps {
  name: string
  isCenter: boolean
}

interface styledProps {
  isCenter: boolean
}

const StyledTitle = styled.h2<styledProps>`
  margin-bottom: 5%;
  @media screen and (min-width: 992px) {
    margin-bottom: 1%;
  }
  ${({ isCenter }) => {
    return isCenter ? 'text-align : center' : null
  }}
`

const Title: FC<TitleProps> = (titleProps: TitleProps): JSX.Element => {
  return (
    <>
      <StyledTitle isCenter={titleProps.isCenter}>
        {titleProps.name}
      </StyledTitle>
    </>
  )
}

export default Title
