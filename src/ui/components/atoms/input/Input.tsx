import { FC } from 'react'
import styled from 'styled-components'

export interface InputProps {
  inputName: string
  invalid?: boolean
  name: string
  disabled?: boolean
  defaultValue?: string
  placeHolder: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
  margin: 0 auto;
`

const Input: FC<InputProps> = (formInputProps) => {
  return (
    <>
      <StyledInput {...formInputProps} />
    </>
  )
}

export default Input
