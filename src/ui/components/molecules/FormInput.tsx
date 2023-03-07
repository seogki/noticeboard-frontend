import { FC } from 'react'

import Label, { LabelProps } from '@components/atoms/Label'
import * as AS from '@components/atoms/style'
import * as MS from '@components/molecules/style'
export interface FormInputProps {
  inputName: string
  placeholder: string
  type?: string
  labelProps: LabelProps
  invalid?: boolean
  disabled?: boolean
  defaultValue?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocusOut?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const FormInput: FC<FormInputProps> = ({
  labelProps,
  ...FormInputProps
}): JSX.Element => {
  return (
    <>
      <MS.FormInputContainer>
        <Label {...labelProps} />
        <AS.FormInput {...FormInputProps} />
      </MS.FormInputContainer>
    </>
  )
}

export default FormInput
