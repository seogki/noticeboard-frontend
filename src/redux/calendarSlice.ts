import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  convertDayOfWeekToKorean,
  getToday,
  getDateByString,
} from '@utils/date'
import dayjs, { Dayjs } from 'dayjs'

interface DateObj {
  dayOfWeek: number
  day: string
  date: string
  dayOfWeekKor: string
  isToday: boolean
  isEmpty?: boolean
}

export interface CalendarState {
  todayDate: string
  monthDateList: DateObj[][]
  date?: Dayjs
}

const initialState: CalendarState = {
  todayDate: '',
  monthDateList: [],
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    today: (state) => {
      state.todayDate = getToday('YYYY-MM-DD')
    },
    dateByString: (state, action: PayloadAction<string>) => {
      state.date = getDateByString(action.payload)
    },
    clearMonthDateList: (state) => {
      state.monthDateList = []
    },
    setMonthDateList: (state, action: PayloadAction<string>) => {
      const [year, month, day] = action.payload.split('-')
      const startDayOfDayOfWeek = dayjs(`${year}-${month}-01`).day()
      const sevenDay = 7
      let days: number = dayjs(action.payload).daysInMonth()
      let emptySize = 0
      if (startDayOfDayOfWeek !== 1) {
        emptySize = Math.abs(startDayOfDayOfWeek - 1)
        console.log(emptySize, startDayOfDayOfWeek)
      }
      days += emptySize
      const monthDayList: DateObj[] = []

      for (let i = 0; i < days; i++) {
        const dayNum = (i + 1 - emptySize).toString().padStart(2, '0')
        const tmpDay = `${year}-${month}-${dayNum}`
        const dayOfWeek = dayjs(tmpDay).day()
        const dayObj = {
          dayOfWeek,
          day: (i + 1 - emptySize).toString(),
          date: tmpDay,
          isToday: dayNum === day,
          isEmpty: i + 1 - emptySize < 1,
          dayOfWeekKor: convertDayOfWeekToKorean(dayOfWeek),
        }
        monthDayList.push(dayObj)
      }
      for (let i = 0; i < monthDayList.length; i += sevenDay) {
        state.monthDateList.push(monthDayList.slice(i, i + sevenDay))
      }
    },
  },
})

export const { today, dateByString, setMonthDateList, clearMonthDateList } =
  calendarSlice.actions

export default calendarSlice
