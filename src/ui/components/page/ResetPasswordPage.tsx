import { Message } from '@interface/base'
import { resetPassword } from '@network/auth'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MuiCheckbox from '../atoms/MuiCheckbox'
import MyHeader from '../organisms/MyHeader'
import ResetPasswordForm from '../organisms/ResetPasswordForm'
import SignUpForm from '../organisms/SignUpForm'
import ResetPasswordTemplate from '../templates/ResetPasswordTemplate'
import SignUpTemplate from '../templates/SignUpTemplate'

const ResetPasswordPage: FC = () => {
  const navigate = useNavigate()
  // const dispatch = useAppDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget) return
    const data = new FormData(e.currentTarget)
    const payload = {
      data: {
        memberEmail: data.get('memberEmail'),
      },
    }
    if (payload.data.memberEmail === '') {
      alert('이메일을 입력부탁드립니다')
      return
    }
    const result = await resetPassword(payload)

    if (result?.status === 'OK') {
      navigate('/change')
    } else {
      alert(result?.message ?? '에러 발생')
    }
  }

  const ResetPasswordFormProps = {
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
      name: '비밀번호 재설정',
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
    submitBtn: {
      type: 'submit' as 'submit',
      fullWidth: true,
      variant: 'contained' as 'contained',
      name: '비밀번호 재설정',
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
    changePasswordLink: {
      linkButton: {
        to: '/change',
        name: '비밀번호 변경',
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
      <ResetPasswordTemplate
        {...pageProps}
        content={<ResetPasswordForm {...ResetPasswordFormProps} />}
      ></ResetPasswordTemplate>
    </>
  )
}
export default ResetPasswordPage
