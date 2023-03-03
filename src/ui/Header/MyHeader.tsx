import { Desktop, Tablet, Mobile } from '@assets/mediaQuery'
import { Link, useNavigate } from 'react-router-dom'
import {
  UserOutlined,
  MenuOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons'
import './MyHeader.scoped.scss'
import MySider from '@ui/Sider/MySider'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@redux/store'
import { setLoginState } from '@redux/authSlice'
function MyHeader() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [collapse, setCollapse] = useState(true)
  const { isLogin } = useAppSelector((state) => state.auth)
  const handleCollapseChange = (arg: boolean) => {
    setCollapse(arg) 
  }
  const handleLogout = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    e.preventDefault()
    localStorage.removeItem('access-token')
    localStorage.removeItem('refresh-token')
    localStorage.removeItem('grantType')
    dispatch(setLoginState(false))
  }
  const redirectHome = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    e.preventDefault()
    navigate('/')
  }
  return (
    <header>
      <div className="container flex-center-left">
        <Mobile>
          <>
            <MenuOutlined
              className="menu-icon flex-center"
              onClick={() => setCollapse(!collapse)}
            ></MenuOutlined>
            {!collapse && (
              <MySider handleCollapseChange={handleCollapseChange} />
            )}
          </>
        </Mobile>
        <b onClick={redirectHome}>S Calendar</b>
        {!isLogin && (
          <Link to="/login" className="mla login-icon flex-center">
            <LoginOutlined />
          </Link>
        )}
        {isLogin && (
          <>
            <UserOutlined className="mla user-icon flex-center" />
            <LogoutOutlined
              className="login-icon flex-center"
              onClick={handleLogout}
            />
          </>
        )}
      </div>
    </header>
  )
}

export default MyHeader
