import { ButtonProps } from 'antd'
import { FC, Fragment } from 'react'
import MuiBox from '../atoms/MuiBox'
import MuiButton, { CustomButtonProps } from '../atoms/MuiButton'
import MuiStack from '../atoms/MuiStack'
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
  prevButton: CustomButtonProps
  nextButton: CustomButtonProps
}

const CalendarLayout: FC<CalendarLayoutProps> = (
  props: CalendarLayoutProps
) => {
  return (
    <>
      <MS.CalendarTable>
        <thead>
          <tr>
            <MS.SunTh>일</MS.SunTh>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <MS.SatTh>토</MS.SatTh>
          </tr>
        </thead>
        <tbody>
          {props.dateList.map((list, trIndex) => (
            <tr key={trIndex}>
              {list.map((data) => (
                <Fragment key={data.date}>
                  {!data.isEmpty &&
                  (data.dayOfWeek === 0 || data.dayOfWeek === 6) ? (
                    <MS.CalendarWeekEndTd
                      dayOfWeekKor={data.dayOfWeekKor}
                      isToday={data.isToday}
                    >
                      <MS.CalendarWeekEnd {...data}>
                        {data.day}
                      </MS.CalendarWeekEnd>
                    </MS.CalendarWeekEndTd>
                  ) : !data.isEmpty ? (
                    <MS.CalendarWeekDayTd isToday={data.isToday}>
                      <MS.CalendarWeekDay {...data}>
                        {data.day}
                      </MS.CalendarWeekDay>
                    </MS.CalendarWeekDayTd>
                  ) : (
                    <MS.CalendarEmptyTd />
                  )}
                </Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </MS.CalendarTable>
      <MuiBox>
        <MuiStack direction={'row'} justifyContent="space-between" marginX={3}>
          <MuiButton {...props.prevButton}></MuiButton>
          <MuiButton {...props.nextButton}></MuiButton>
        </MuiStack>
      </MuiBox>
    </>
  )
}

export default CalendarLayout
