import { FC } from 'react'
import SmallTitle, { SmallTitleProps } from '../atoms/title/SmallTitle'
import Calendarlayout, {
  CalendarLayoutProps,
} from '../molecules/CalendarLayout'
import * as OS from './style'

export interface CalendarTableProps {
  title: SmallTitleProps
  calander: CalendarLayoutProps
}

const CalendarTable: FC<CalendarTableProps> = (
  calendarTableProps: CalendarTableProps
) => {
  return (
    <OS.CalendarTableContainer>
      <SmallTitle {...calendarTableProps.title} />
      <Calendarlayout {...calendarTableProps.calander} />
    </OS.CalendarTableContainer>
  )
}

export default CalendarTable
