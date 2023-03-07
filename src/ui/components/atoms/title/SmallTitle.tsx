import { FC } from 'react'
import styled from 'styled-components'
export interface SmallTitleProps {
  name: string
  isCenter: boolean
}

interface styledProps {
  isCenter: boolean
}

const StyledTitle = styled.h3<styledProps>`
  margin-bottom: 5%;
  @media screen and (min-width: 992px) {
    margin-bottom: 1%;
  }
  ${({ isCenter }) => {
    return isCenter ? 'text-align : center' : null
  }}
`

const SmallTitle: FC<SmallTitleProps> = (
  titleProps: SmallTitleProps
): JSX.Element => {
  return (
    <>
      <StyledTitle isCenter={titleProps.isCenter}>
        {titleProps.name}
      </StyledTitle>
    </>
  )
}

export default SmallTitle
