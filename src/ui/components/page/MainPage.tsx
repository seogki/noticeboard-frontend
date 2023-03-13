import { FC, useEffect, useState } from 'react'
import CalendarTable from '@components/organisms/CalendarTable'
import MainTemplate from '@components/templates/MainTemplate'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { clearMonthDateList, setMonthDateList } from '@redux/dateSlice'
import MyHeader from '../organisms/MyHeader'
import { useNavigate } from 'react-router-dom'
import dayjs, { Dayjs } from 'dayjs'

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { monthDateList, monthDate, curMonth, prevDate, nextDate } =
    useAppSelector((state) => state.date)

  useEffect(() => {
    dispatch(setMonthDateList(''))
    // setCurrentMonthStr()
    // getPrevNextDate()
  }, [])
  // console.log(monthDate, monthDateList)

  const navigateToUser = () => {
    navigate('/user')
  }

  const handlePrevDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setMonthDateList(dayjs(prevDate).format('YYYY-MM-DD')))
  }

  const handleNextDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setMonthDateList(dayjs(nextDate).format('YYYY-MM-DD')))
  }

  const redirectMain = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }

  const CalendarTableProps = {
    title: {
      name: curMonth,
      isCenter: true,
    },
    calendar: {
      dateList: monthDateList,

      prevButton: {
        color: 'inherit' as 'inherit',
        name: prevDate,
        onClick: handlePrevDate,
        variant: 'outlined' as 'outlined',
      },
      nextButton: {
        color: 'inherit' as 'inherit',
        name: nextDate,
        onClick: handleNextDate,
        variant: 'outlined' as 'outlined',
      },
    },
    box: {
      sx: {
        height: '100vh',
      },
    },
  }
  const MyHeaderProps = {
    box: {
      sx: {
        flexGrow: 1,
      },
    },

    appBar: {
      position: 'static' as 'static',
    },
    toolbar: {},
    menuButton: {
      iconButton: {
        size: 'large' as 'large',
        edge: 'start' as 'start',
        color: 'inherit' as 'inherit',
        'aria-label': 'menu',
        sx: {
          mr: 2,
        },
      },
    },
    typography: {
      variant: 'h6' as 'h6',
      component: 'div',
      sx: {
        flexGrow: 1,
      },
      onClick: redirectMain,
      name: 'S.Calendar',
    },
    linkLoginButton: {
      linkButton: {
        color: 'inherit' as 'inherit',
        name: 'login',
        underline: 'none',
        to: '/login',
        variant: 'outlined' as 'outlined',
      },
    },
    linkSignupButton: {
      linkButton: {
        color: 'inherit' as 'inherit',
        name: 'sign up',
        underline: 'none',
        to: '/signup',
        variant: 'outlined' as 'outlined',
      },
    },
    userIconButton: {
      iconButton: {
        color: 'inherit' as 'inherit',
        onClick: navigateToUser,
      },
    },
    options: {
      isLogin: localStorage.getItem('access-token') !== null,
    },
  }

  const pageProps = {
    container: {
      maxWidth: false as false,
      disableGutters: true,
      sx: {
        height: '100vh',
      },
    },
  }

  return (
    <>
      <MainTemplate
        {...pageProps}
        header={<MyHeader {...MyHeaderProps} />}
        content={<CalendarTable {...CalendarTableProps} />}
      ></MainTemplate>
    </>
  )
}

export default MainPage
