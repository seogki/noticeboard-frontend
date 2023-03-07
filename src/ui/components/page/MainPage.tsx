import MyHeader from '@ui/Header/MyHeader'
import { FC } from 'react'
import CalendarTable from '@components/organisms/CalendarTable'
import MainTemplate from '@components/templates/MainTemplate'
import dayjs from 'dayjs'

interface DateObj {
  dayOfWeek: number
  day: string
  date: string
  today: boolean
  dayOfWeekKor: string
  empty?: boolean
}

const MainPage: FC = () => {
  const today: string = dayjs().format('YYYY-M-DD')
  const [year, month, day] = today.split('-')
  let days: number = dayjs().daysInMonth()
  const todayDayOfWeek = dayjs(`${year}-${month}-01`).day()

  let emptySize = 0
  if (todayDayOfWeek !== 1) {
    emptySize = Math.abs(todayDayOfWeek - 1)
    console.log(emptySize, todayDayOfWeek)
  }
  days += emptySize
  //   console.log(days)
  const list: DateObj[] = []
  const splitList: DateObj[][] = []

  const convertDayOfWeekToKorean = (dayOfWeek: number): string => {
    switch (dayOfWeek) {
      case 0: {
        return '일'
      }
      case 1: {
        return '월'
      }
      case 2: {
        return '화'
      }
      case 3: {
        return '수'
      }
      case 4: {
        return '목'
      }
      case 5: {
        return '금'
      }
      case 6: {
        return '토'
      }
      default: {
        return '미확인'
      }
    }
  }

  const init = () => {
    for (let i = 0; i < days; i++) {
      const dayNum = (i + 1 - emptySize).toString().padStart(2, '0')
      const tmpDay = `${year}-${month}-${dayNum}`
      const dayOfWeek = dayjs(tmpDay).day()
      const dayObj = {
        dayOfWeek,
        day: (i + 1 - emptySize).toString(),
        date: tmpDay,
        today: dayNum === day,
        empty: i + 1 - emptySize < 1,
        dayOfWeekKor: convertDayOfWeekToKorean(dayOfWeek),
      }
      list.push(dayObj)
    }
    for (let i = 0; i < list.length; i += 7) {
      splitList.push(list.slice(i, i + 7))
    }
    console.log(list)
  }
  init()
  const CalendarTableProps = {
    title: {
      name: `${year}.${month}`,
      isCenter: true,
    },
    calander: {
      dateList: splitList,
    },
  }

  return (
    <>
      <MainTemplate
        header={<MyHeader />}
        content={<CalendarTable {...CalendarTableProps} />}
      ></MainTemplate>
    </>
  )
}

export default MainPage
