//this is the navbar component, which is globally used as a menu bar while other pages are open

//These are our imports
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { useNavigate } from "react-router-dom";

//This is the styling for our  nav bar
const useStyles = makeStyles((theme) => ({
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

//this is the navbar const which will be exported later so all pages can access it. This is where all of the functions for the navbar are contained
const Navbar = props => {
  
   
  let navigate = useNavigate()
//This is the logout function which returns the user to the homepage and sets their authentication status to false, meaning they will have to log in again to view anything that requires authentication
    const logout = () => {
    props.onAuthenticated(false)
    navigate("/home", {replace: true})
  }
//Here is some styling that is implemented for the navbar
  const classes = useStyles();
  const [example, setExample] = useState("slate");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";

  return (
    <React.Fragment>
      {/* Appbar is an mui component that comes packaged with alot of functionality once it contains a toolbar, the styling can be seen below*/}
      <AppBar
        color={isCustomColor || isCustomHeight ? "slate" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
{/* The toolbar is a container like a div that holds buttons which link to different pages within the app, such as home, miniatures and login */}
        <Toolbar>

          <IconButton position="center" color="inherit" href="/home">
            Home
          </IconButton>
          <IconButton color="inherit" href="/miniatures">
            Miniatures
          </IconButton>
          <IconButton color="inherit" href="/login">
            Login
          </IconButton>
          <IconButton color="inherit" href="/contact">
            Contact
          </IconButton>
          <IconButton color="inherit" href="/about" >
            About
          </IconButton>
          <IconButton color="inherit" onClick={logout} >
            Logout
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />


    </React.Fragment>
  );
}
//This is exported so it is global
export default Navbar

  

//   let logoutButton;
//   let navigate = useNavigate()

//   const logout = () => {
//     props.onAuthenticated(false)
//     navigate("/home", {replace: true})
//   }

//   if(props.onAuthenticated){
//     logoutButton = (
//     <button onClick={logout}>logout</button>
//     )
//   }
//   return (
//     <>
//       <Link to="home">Home</Link>
//       <Link to="miniatures">Miniatures</Link>
//       <Link to="login">Login</Link>
//       <Link to="contact">Contact</Link>
//       <Link to="about">About</Link>

//       {logoutButton}
//     </>
//   );
// };

// export default Navbar;
