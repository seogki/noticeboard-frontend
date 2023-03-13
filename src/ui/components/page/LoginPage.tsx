import { Message } from '@interface/base'
import { login } from '@network/auth'
import { setLoginState } from '@redux/authSlice'
import { useAppDispatch } from '@redux/store'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import MuiCheckbox from '../atoms/MuiCheckbox'
import MyHeader from '../organisms/MyHeader'
import LoginForm from '../organisms/LoginForm'
import LoginTemplate from '../templates/LoginTemplate'

const LoginPage: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget) return
    const data = new FormData(e.currentTarget)
    const payload = {
      data: {
        memberEmail: data.get('memberEmail'),
        memberPassword: data.get('memberPassword'),
      },
    }
    const result: Message = await login(payload)

    if (result && result.data !== null && result.data.accessToken) {
      localStorage.setItem('access-token', result.data.accessToken)
      localStorage.setItem('refresh-token', result.data.refreshToken)
      localStorage.setItem('grantType', result.data.grantType)
      dispatch(setLoginState(true))
      navigate('/')
    } else {
      alert('존재하지않는 계정입니다')
      //wrong Password or email
    }
  }

  const LoginFormProps = {
    container: {
      component: 'main',
      maxWidth: 'xs' as 'xs',
    },
    upperBox: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    avatar: {
      sx: {
        m: 1,
        bgcolor: 'secondary.main',
      },
    },
    typography: {
      component: 'h1',
      variant: 'h5' as 'h5',
      name: '로그인',
    },
    innerBox: {
      component: 'form' as 'form',
      onSubmit: handleSubmit,
      noValidate: true,
      sx: {
        mt: 1,
      },
    },
    emailTextField: {
      margin: 'normal' as 'normal',
      required: true,
      fullWidth: true,
      id: 'memberEmail',
      label: '계정',
      name: 'memberEmail',
      autoComplete: 'email',
      autoFocus: true,
      variant: 'standard' as 'standard',
    },
    passwordTextField: {
      margin: 'normal' as 'normal',
      required: true,
      fullWidth: true,
      id: 'memberPassword',
      label: '비밀번호',
      name: 'memberPassword',
      type: 'password',
      autoComplete: 'current-password',
      autoFocus: true,
      variant: 'standard' as 'standard',
    },
    formControlLabel: {
      control: <MuiCheckbox {...{ value: 'remember', color: 'primary' }} />,
      label: 'Remember me',
    },
    submitBtn: {
      type: 'submit' as 'submit',
      fullWidth: true,
      variant: 'contained' as 'contained',
      name: '로그인',
      sx: {
        mt: 3,
        mb: 2,
      },
    },
    gridContainer: {
      container: true,
    },
    gridFirstItem: {
      item: true,
      xs: true,
    },
    gridSecondItem: {
      item: true,
    },
    forgetPasswordLink: {
      linkButton: {
        to: '/reset',
        name: '비밀번호 재설정',
      },
    },
    signUpLink: {
      linkButton: {
        to: '/signup',
        name: '회원가입',
      },
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
      <LoginTemplate
        {...pageProps}
        // header={<MyHeader {...MyHeaderProps} />}
        content={<LoginForm {...LoginFormProps} />}
      ></LoginTemplate>
    </>
  )
}

export default LoginPage
