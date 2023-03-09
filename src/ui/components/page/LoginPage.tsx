import { Message } from '@interface/base'
import { login } from '@network/auth'
import { setLoginState } from '@redux/authSlice'
import { useAppDispatch } from '@redux/store'
import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MuiCheckbox from '../atoms/MuiCheckbox'
import MyHeader from '../organisms/MyHeader'
import LoginForm from '../organisms/LoginForm'
import LoginTemplate from '../templates/LoginTemplate'

const LoginPage: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [values, setValues] = useState({
    memberEmail: '',
    memberPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<EventTarget | HTMLFormElement>
  ) => {
    e.preventDefault()
    if (!e.currentTarget) return
    // const data = new FormData(e.currentTarget)
    const payload = { data: values }
    alert(`${values.memberEmail}, ${values.memberPassword}`)
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
    iconButton: {
      size: 'large' as 'large',
      edge: 'start' as 'start',
      color: 'inherit' as 'inherit',
      'aria-label': 'menu',
      sx: {
        mr: 2,
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
    button: {
      color: 'inherit' as 'inherit',
      name: 'Login',
    },
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
      label: '패스워드',
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
  }

  return (
    <>
      <LoginTemplate
        header={<MyHeader {...MyHeaderProps} />}
        content={<LoginForm {...LoginFormProps} />}
      ></LoginTemplate>
    </>
  )
}

export default LoginPage
