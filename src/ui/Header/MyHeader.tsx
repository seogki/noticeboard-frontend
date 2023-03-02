import { Desktop, Tablet, Mobile } from '@assets/mediaQuery'
import { Link } from 'react-router-dom'
import { UserOutlined, MenuOutlined, LogoutOutlined } from '@ant-design/icons'
import './MyHeader.scoped.scss'
import MySider from '@ui/Sider/MySider'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@redux/store'
import { setLoginState } from '@redux/loginSlice'
function MyHeader() {
  const [collapse, setCollapse] = useState(true)
  const { isLogin } = useAppSelector((state) => state.login)
  const handleCollapseChange = (arg: boolean) => {
    setCollapse(arg)
  }
  return (
    <header className="my-header">
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
        <b>쉐어</b>
        {!isLogin && (
          <Link to="/login" className="mla login-icon flex-center">
            <UserOutlined />
          </Link>
        )}
        {isLogin && <LogoutOutlined className="mla login-icon flex-center" />}
      </div>
    </header>
  )
}

export default MyHeader
