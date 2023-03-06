import { FC } from 'react'
import styled from 'styled-components'
interface TitleProps {
  title: string
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

const Title: FC<TitleProps> = ({ title, isCenter }): JSX.Element => {
  return (
    <>
      <StyledTitle isCenter={isCenter}>{title}</StyledTitle>
    </>
  )
}

export default Title
