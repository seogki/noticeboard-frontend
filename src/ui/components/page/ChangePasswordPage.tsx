import { Message } from '@interface/base'
import { resetPassword } from '@network/auth'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MuiCheckbox from '../atoms/MuiCheckbox'
import ChangePasswordForm from '../organisms/ChangePasswordForm'
import ChangePasswordTemplate from '../templates/ChangePasswordTemplate'

const ChangePasswordPage: FC = () => {
  const navigate = useNavigate()
  // const dispatch = useAppDispatch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget) return
    const data = new FormData(e.currentTarget)
    const payload = {
      data: {
        memberOldPassword: data.get('memberOldPassword'),
        memberNewPassword: data.get('memberNewPassword'),
        memberCorrectPassword: data.get('memberCorrectPassword'),
      },
    }
    // if (payload.data.memberEmail === '') {
    //   alert('이메일을 입력부탁드립니다')
    //   return
    // }
    // const result: Message = await resetPassword(payload)

    // if (result.status === 'OK') {
    //   navigate('/login')
    // } else {
    //   alert(result.message ?? '에러 발생')
    // }
  }

  const ChangePasswordPageFormProps = {
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
      name: '비밀번호 변경',
    },
    innerBox: {
      component: 'form' as 'form',
      onSubmit: handleSubmit,
      noValidate: true,
      sx: {
        mt: 1,
      },
    },
    oldPasswordTextField: {
      margin: 'normal' as 'normal',
      required: true,
      fullWidth: true,
      id: 'memberOldPassword',
      label: '이전 비밀번호',
      name: 'memberOldPassword',
      type: 'password',
      autoComplete: 'current-password',
      autoFocus: true,
      variant: 'standard' as 'standard',
    },
    newPasswordTextField: {
      margin: 'normal' as 'normal',
      required: true,
      fullWidth: true,
      id: 'memberNewPassword',
      label: '새로운 비밀번호',
      name: 'memberNewPassword',
      type: 'password',
      autoComplete: 'current-password',
      autoFocus: true,
      variant: 'standard' as 'standard',
    },
    correctPasswordTextField: {
      margin: 'normal' as 'normal',
      required: true,
      fullWidth: true,
      id: 'memberCorrectPassword',
      label: '비밀번호 확인',
      name: 'memberCorrectPassword',
      type: 'password',
      autoComplete: 'current-password',
      autoFocus: true,
      variant: 'standard' as 'standard',
    },
    submitBtn: {
      type: 'submit' as 'submit',
      fullWidth: true,
      variant: 'contained' as 'contained',
      name: '비밀번호 변경',
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
    resetPasswordLink: {
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
  return (
    <>
      <ChangePasswordTemplate
        content={<ChangePasswordForm {...ChangePasswordPageFormProps} />}
      ></ChangePasswordTemplate>
    </>
  )
}
export default ChangePasswordPage
