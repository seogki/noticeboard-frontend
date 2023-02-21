import './Login.scoped.scss'
function Login() {
  return (
    <div className="login">
      <h2 className="tac">Login</h2>
      <div className="container flex-center">
        <label>계정</label>
        <input className="id" />
        <label>비밀번호</label>
        <input className="password" type="password" />
      </div>
    </div>
  )
}

export default Login
