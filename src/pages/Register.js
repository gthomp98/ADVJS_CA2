import RegistrationForm from "../components/RegistrationForm"

const Register = props => {

  return (
    <div>
      {!props.authenticated ? <RegistrationForm onAuthenticated={props.onAuthenticated} /> : ""}

    </div>
  )
}

export default Register