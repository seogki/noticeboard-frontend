import { BoxProps } from '@mui/system'
import { FC } from 'react'
import MuiBox from '../atoms/MuiBox'
import MuiContainer from '../atoms/MuiContainer'
import MuiStack from '../atoms/MuiStack'
import SmallTitle, { SmallTitleProps } from '../atoms/title/SmallTitle'
import CalendarLayout, {
  CalendarLayoutProps,
} from '../molecules/CalendarLayout'
import * as OS from './style'

export interface CalendarTableProps {
  title: SmallTitleProps
  calendar: CalendarLayoutProps
  box: BoxProps
}

const CalendarTable: FC<CalendarTableProps> = (props: CalendarTableProps) => {
  return (
    <MuiBox {...props.box}>
      <MuiStack
        direction={'row'}
        spacing={2}
        justifyContent="center"
        alignItems={'center'}
      >
        <SmallTitle {...props.title} />
      </MuiStack>

      <CalendarLayout {...props.calendar} />
    </MuiBox>
  )
}

export default CalendarTable
