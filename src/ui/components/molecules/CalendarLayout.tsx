import { FC } from 'react'
import * as MS from './style'

interface DateObj {
  dayOfWeek: number
  day: string
  date: string
  dayOfWeekKor: string
  isToday: boolean
  isEmpty?: boolean
}
export interface CalendarLayoutProps {
  dateList: DateObj[][]
}

const CalendarLayout: FC<CalendarLayoutProps> = (
  calendarLayoutProps: CalendarLayoutProps
) => {
  return (
    <MS.CalendarLayoutContainer>
      <MS.CalendarTable>
        <tbody>
          {calendarLayoutProps.dateList.map((list, trIndex) => (
            <>
              <tr key={trIndex}>
                {list.map((data) => (
                  <>
                    {!data.isEmpty &&
                    (data.dayOfWeek === 0 || data.dayOfWeek === 6) ? (
                      <MS.CalendarWeekEndTd
                        isToday={data.isToday}
                        key={data.date}
                      >
                        <MS.CalendarWeekEnd>{data.day}</MS.CalendarWeekEnd>
                      </MS.CalendarWeekEndTd>
                    ) : !data.isEmpty ? (
                      <MS.CalendarWeekDayTd
                        isToday={data.isToday}
                        key={data.date}
                      >
                        <MS.CalendarWeekDay>{data.day}</MS.CalendarWeekDay>
                      </MS.CalendarWeekDayTd>
                    ) : (
                      <MS.CalendarEmptyTd key={data.date} />
                    )}
                  </>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </MS.CalendarTable>
    </MS.CalendarLayoutContainer>
  )
}

export default CalendarLayout
