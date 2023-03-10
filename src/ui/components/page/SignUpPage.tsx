import { Message } from '@interface/base'
import { signUp } from '@network/auth'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MuiCheckbox from '../atoms/MuiCheckbox'
import MyHeader from '../organisms/MyHeader'
import SignUpForm from '../organisms/SignUpForm'
import SignUpTemplate from '../templates/SignUpTemplate'

const SignUpPage: FC = () => {
  const navigate = useNavigate()
  // const dispatch = useAppDispatch()
  const [values, setValues] = useState({
    memberEmail: '',
    memberNickname: '',
    memberPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget) return
    const data = new FormData(e.currentTarget)
    const payload = {
      data: {
        memberEmail: data.get('memberEmail'),
        memberNickname: data.get('memberNickname'),
        memberPassword: data.get('memberPassword'),
      },
    }
    if (
      payload.data.memberEmail === '' ||
      payload.data.memberNickname === '' ||
      payload.data.memberPassword === ''
    ) {
      alert('모두 입력부탁드립니다')
      return
    }
    const result: Message = await signUp(payload)

    if (result.status === 'OK') {
      navigate('/login')
    } else {
      alert(result.message ?? '에러 발생')
    }
  }

  const SignUpFormProps = {
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
      name: '회원가입',
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
    nicknameTextField: {
      margin: 'normal' as 'normal',
      required: true,
      fullWidth: true,
      id: 'memberNickname',
      label: '명칭',
      name: 'memberNickname',
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
    submitBtn: {
      type: 'submit' as 'submit',
      fullWidth: true,
      variant: 'contained' as 'contained',
      name: '회원가입',
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
    loginLink: {
      linkButton: {
        to: '/login',
        name: '로그인',
      },
    },
  }
  return (
    <>
      <SignUpTemplate
        // header={<MyHeader {...MyHeaderProps} />}
        content={<SignUpForm {...SignUpFormProps} />}
      ></SignUpTemplate>
    </>
  )
}
export default SignUpPage
