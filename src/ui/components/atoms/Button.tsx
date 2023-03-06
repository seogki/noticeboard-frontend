import { FC } from 'react'

export interface ButtonProps {
  name: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: FC<ButtonProps> = (buttonProps: ButtonProps): JSX.Element => {
  return (
    <>
      <Button name={buttonProps.name} onClick={buttonProps.onClick}></Button>
    </>
  )
}

export default Button
