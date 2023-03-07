import { FC } from 'react'
import Title from '@ui/components/atoms/title/Title'

export interface FormTitleProps {
  name: string
  isCenter: boolean
}

const FormTitle: FC<FormTitleProps> = (formTitleProps: FormTitleProps) => {
  return (
    <>
      <Title {...formTitleProps}></Title>
    </>
  )
}

export default FormTitle
