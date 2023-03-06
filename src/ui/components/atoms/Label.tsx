import { FC } from 'react'
import styled from 'styled-components'

export interface LabelProps {
  name: string
}

const StyledLabel = styled.label`
  font-size: 0.6em;
`

const Label: FC<LabelProps> = (labelProps) => {
  return (
    <>
      <StyledLabel>{labelProps.name}</StyledLabel>
    </>
  )
}

export default Label
