import { FC, useEffect } from 'react'
import CalendarTable from '@components/organisms/CalendarTable'
import MainTemplate from '@components/templates/MainTemplate'
import { useAppDispatch, useAppSelector } from '@redux/store'
import { setMonthDateList, today } from '@redux/dateSlice'
import MyHeader from '../organisms/MyHeader'
import { useNavigate } from 'react-router-dom'

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { todayDate, monthDateList } = useAppSelector((state) => state.date)
  // const { isLogin } = useAppSelector((state) => state.auth)
  useEffect(() => {
    dispatch(today())
    dispatch(setMonthDateList(todayDate))
  }, [dispatch, todayDate])
  console.log(todayDate, monthDateList)

  const [year, month] = todayDate.split('-')

  const navigateToUser = () => {
    navigate('/user')
  }

  const CalendarTableProps = {
    title: {
      name: `${year}.${month}`,
      isCenter: true,
    },
    calendar: {
      dateList: monthDateList,
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
      name: 'S.Calendar',
    },
    linkLoginButton: {
      linkButton: {
        color: 'inherit' as 'inherit',
        name: '로그인',
        to: '/login',
        variant: 'outlined' as 'outlined',
      },
    },
    linkSignupButton: {
      linkButton: {
        color: 'inherit' as 'inherit',
        name: '회원가입',
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
