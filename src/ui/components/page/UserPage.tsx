import { FC, useEffect } from 'react'
import MyHeader from '../organisms/MyHeader'
import UserTemplate from '../templates/UserTemplate'
import UserInfo from '../organisms/UserInfo'
import { getMember } from '@network/member'
import { Member } from '@interface/member'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@redux/store'
import { setMember } from '@redux/memberSlice'
import { useNavigate } from 'react-router-dom'

const UserPage: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { member } = useAppSelector((state) => state.member)
  useEffect(() => {
    saveMemberInfo()
  }, [])

  const saveMemberInfo = async () => {
    const result = await getMember<Member>()
    if (result?.data) dispatch(setMember(result.data))
    console.log(result)
  }

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem('access-token')
    localStorage.removeItem('refresh-token')
    localStorage.removeItem('grant-type')
    localStorage.removeItem('expiration-date')
    navigate('/')
  }

  const handleChangePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/change')
  }

  const redirectMain = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }

  const UserInfoProps = {
    container: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    box: {
      sx: {
        marginBottom: '10%',
      },
    },
    logoutBtn: {
      color: 'inherit' as 'inherit',
      variant: 'outlined' as 'outlined',
      name: '로그아웃',
      onClick: handleLogout,
    },
    changePasswordBtn: {
      color: 'inherit' as 'inherit',
      variant: 'outlined' as 'outlined',
      name: '비밀번호 변경',
      onClick: handleChangePassword,
    },
    avatar: {
      sx: {
        // display: 'inline-block',
      },
    },

    options: {
      memberEmail: member?.memberEmail,
      memberNickname: member?.memberNickname,
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
      <UserTemplate
        {...pageProps}
        header={<MyHeader {...MyHeaderProps} />}
        content={<UserInfo {...UserInfoProps} />}
      ></UserTemplate>
    </>
  )
}

export default UserPage
