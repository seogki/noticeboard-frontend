import { FC } from 'react'
import MyHeader from '../organisms/MyHeader'
import UserTemplate from '../templates/UserTemplate'
import UserInfo from '../organisms/UserInfo'

const UserPage: FC = () => {
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
        flexGrow: 1,
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        height: '80vh',
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
