//This is the Registration page, it imports the Register form and uses this to display to the user, while running the onAUthenticated prop in the background to check if the user is authenticated or not before accessing the page.
import RegistrationForm from "../components/RegistrationForm"

const Register = props => {

  return (
    <div>
      {!props.authenticated ? <RegistrationForm onAuthenticated={props.onAuthenticated} /> : ""}

    </div>
  )
}

export default Register