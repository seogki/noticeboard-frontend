import { FC } from 'react'
import SmallTitle, { SmallTitleProps } from '../atoms/title/SmallTitle'
import CalendarLayout, {
  CalendarLayoutProps,
} from '../molecules/CalendarLayout'
import * as OS from './style'

export interface CalendarTableProps {
  title: SmallTitleProps
  calendar: CalendarLayoutProps
}

const CalendarTable: FC<CalendarTableProps> = (
  calendarTableProps: CalendarTableProps
) => {
  return (
    <OS.CalendarTableContainer>
      <SmallTitle {...calendarTableProps.title} />
      <CalendarLayout {...calendarTableProps.calendar} />
    </OS.CalendarTableContainer>
  )
}

export default CalendarTable
