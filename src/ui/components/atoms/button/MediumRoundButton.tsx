import { FC } from 'react'
import Button from '@mui/material/Button'
interface MediumRoundButton {
  name: string
}

const MediumRoundButton: FC<MediumRoundButton> = (
  mediumRoundButton: MediumRoundButton
) => {
  return (
    <>
      <Button>{mediumRoundButton.name}</Button>
    </>
  )
}

export default MediumRoundButton
