import styled from 'styled-components'
interface styledProps {
  isCenter: boolean
}
export const FormInput = styled.input`
  height: 10%;
  width: 70%;
  margin: 0 auto 2%;
  border-radius: 8px;
`

export const FormTitle = styled.h2<styledProps>`
  margin-bottom: 5%;
  @media screen and (min-width: 992px) {
    margin-bottom: 1%;
  }
  ${({ isCenter }) => {
    return isCenter ? 'text-align : center' : null
  }}
`
