import LoginForm from "../components/LoginForm"

const Login = props => {

  return (
    <div>
      {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}

    </div>
  )
}

export default Login