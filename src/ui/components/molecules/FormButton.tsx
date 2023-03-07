import { FC } from 'react'
import RoundButton from '@components/atoms/button/RoundButton'
import * as MS from './style'
export interface FormButtonProps {
  name: string
}

const FormButton: FC<FormButtonProps> = (formButtonProps: FormButtonProps) => {
  return (
    <>
      <MS.FormButtonContainer>
        <RoundButton {...formButtonProps} />
      </MS.FormButtonContainer>
    </>
  )
}
export default FormButton
