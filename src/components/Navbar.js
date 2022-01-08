import { Link, useNavigate } from "react-router-dom";


const Navbar = props => {

  let logoutButton;
  let navigate = useNavigate()

  const logout = () => {
    props.onAuthenticated(false)
    navigate("/home", {replace: true})
  }

  if(props.onAuthenticated){
    logoutButton = (
    <button onClick={logout}>logout</button>
    )
  }
  return (
    <>
      <Link to="home">Home</Link>
      <Link to="miniatures">Miniatures</Link>
      <Link to="login">Login</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About</Link>

      {logoutButton}
    </>
  );
};

export default Navbar;
