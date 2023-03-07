import { FC } from 'react'
import * as AS from '../style'
export interface RoundButtonProps {
  name: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const RoundButton: FC<RoundButtonProps> = (
  roundButtonProps: RoundButtonProps
): JSX.Element => {
  return (
    <>
      <AS.RoundButton
        name={roundButtonProps.name}
        onClick={roundButtonProps.onClick}
      >
        {roundButtonProps.name}
      </AS.RoundButton>
    </>
  )
}

export default RoundButton
