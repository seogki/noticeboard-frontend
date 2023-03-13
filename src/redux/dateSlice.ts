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
  monthDate: string
  date?: Dayjs
  curMonth: string
  prevDate: string
  nextDate: string
}

const initialState: CalendarState = {
  todayDate: '',
  monthDateList: [],
  monthDate: '',
  curMonth: '',
  prevDate: '',
  nextDate: '',
}

export const dateSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    clearMonthDateList: (state) => void (state.monthDateList = []),
    setMonthDateList: (state, action: PayloadAction<string>) => {
      if (state.monthDate !== '' && state.monthDate === action.payload) return
      let newDate: string = ''
      if (!action.payload || action.payload === '') {
        newDate = getToday('YYYY-MM-DD')
      } else {
        newDate = action.payload
      }
      const [year, month] = newDate.split('-')
      const startDayOfDayOfWeek = dayjs(`${year}-${month}-01`).day()
      const sevenDay = 7
      let days: number = dayjs(newDate).daysInMonth()
      const todayDate = dayjs().format('YYYY-MM-DD')
      days += startDayOfDayOfWeek
      const monthDayList: DateObj[] = []
      const splitMonthList: DateObj[][] = []
      console.log(startDayOfDayOfWeek)
      for (let i = 0; i < days; i++) {
        const dayNum = (i + 1 - startDayOfDayOfWeek).toString().padStart(2, '0')
        const tmpDay = `${year}-${month}-${dayNum}`
        const dayOfWeek = dayjs(tmpDay).day()
        const dayObj = {
          dayOfWeek,
          day: (i + 1 - startDayOfDayOfWeek).toString(),
          date: tmpDay,
          isToday: tmpDay === todayDate,
          isEmpty: i + 1 - startDayOfDayOfWeek < 1,
          dayOfWeekKor: convertDayOfWeekToKorean(dayOfWeek),
        }
        monthDayList.push(dayObj)
      }
      for (let i = 0; i < monthDayList.length; i += sevenDay) {
        splitMonthList.push(monthDayList.slice(i, i + sevenDay))
      }

      // console.log('split', splitMonthList, `${year}.${month}`, newDate)
      const currentDate = dayjs(newDate)
      const newPrevDate = currentDate.subtract(1, 'month').format('YYYY-MM-DD')
      const newNextDate = currentDate.add(1, 'month').format('YYYY-MM-DD')
      // console.log('prev next', newPrevDate, newNextDate)
      return {
        ...state,
        monthDateList: splitMonthList,
        monthDate: action.payload,
        curMonth: `${year}.${month}`,
        prevDate: newPrevDate,
        nextDate: newNextDate,
      }
    },
  },
})

export const { setMonthDateList, clearMonthDateList } = dateSlice.actions

export default dateSlice
