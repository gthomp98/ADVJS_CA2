//This is the login page, it imports the login form and uses this to display to the user, while running the onAUthenticated prop in the background to check if the user is authenticated or not before accessing the page.
import LoginForm from "../components/LoginForm"

const Login = props => {

  return (
    <div>
      {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}

    </div>
  )
}

export default Login