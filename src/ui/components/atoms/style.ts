import styled from 'styled-components'
import * as V from '@assets/styled/variable'

export const RoundButton = styled.button`
  border-radius: ${V.G_BORDER_RADIUS};
  background-color: ${V.G_PRIMARY_COLOR};
  color: ${V.G_PRIMARY_TEXT_COLOR};
  font-size: 0.8em;
  width: 100%;
  height: 100%;
`
interface styledProps {
  isCenter: boolean
}
export const FormInput = styled.input`
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  &:hover,
  &:active {
    border: 1px solid ${V.G_SECONDARY_COLOR};
  }
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
