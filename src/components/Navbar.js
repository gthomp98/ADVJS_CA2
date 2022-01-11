import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

const Navbar = props => {
  
   
  let navigate = useNavigate()

    const logout = () => {
    props.onAuthenticated(false)
    navigate("/home", {replace: true})
  }

  const classes = useStyles();
  const [example, setExample] = useState("slate");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "slate" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
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
