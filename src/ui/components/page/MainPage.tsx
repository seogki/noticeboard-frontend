import MyHeader from '@ui/Header/MyHeader'
import { FC, useEffect } from 'react'
import CalendarTable from '@components/organisms/CalendarTable'
import MainTemplate from '@components/templates/MainTemplate'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { setMonthDateList, today } from '@redux/dateSlice'

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const { todayDate, monthDateList } = useAppSelector((state) => state.date)

  useEffect(() => {
    dispatch(today())
    dispatch(setMonthDateList(todayDate))
  }, [dispatch, todayDate])
  console.log(todayDate, monthDateList)

  const [year, month] = todayDate.split('-')

  const CalendarTableProps = {
    title: {
      name: `${year}.${month}`,
      isCenter: true,
    },
    calendar: {
      dateList: monthDateList,
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
