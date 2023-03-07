import { Message } from '@interface/base'
import { signUp } from '@network/auth'
import { useAppDispatch } from '@redux/store'
import MyHeader from '@ui/Header/MyHeader'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../organisms/SignUpForm'
import SignUpTemplate from '../templates/SignUpTemplate'

const SignUpPage: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [values, setValues] = useState({
    memberEmail: '',
    memberNickname: '',
    memberPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    const payload = { data: values }
    if (
      values.memberEmail === '' ||
      values.memberNickname === '' ||
      values.memberPassword === ''
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
    email: {
      inputName: '신규계정',
      value: values.memberEmail,
      name: 'memberEmail',
      onChange: handleChange,
      placeholder: '이메일을 입력해주세요',
      labelProps: {
        name: '계정',
      },
    },
    nickname: {
      inputName: '신규닉네임',
      value: values.memberNickname,
      placeholder: '별명을 입력해주세요',

      onChange: handleChange,
      name: 'memberNickname',
      labelProps: {
        name: '별명',
      },
    },
    password: {
      inputName: '신규패스워드',
      value: values.memberPassword,
      placeholder: '8~12자리 비밀번호를 입력해주세요',
      type: 'password',
      onChange: handleChange,
      name: 'memberPassword',
      labelProps: {
        name: '패스워드',
      },
    },
    signUpBtn: {
      name: '회원가입',
      onClick: handleSubmit,
    },
    title: {
      name: '회원가입',
      isCenter: true,
    },
  }
  return (
    <>
      <SignUpTemplate
        header={<MyHeader />}
        content={<SignUpForm {...SignUpFormProps} />}
      ></SignUpTemplate>
    </>
  )
}
export default SignUpPage
