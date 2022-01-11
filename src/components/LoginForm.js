//This page is the login form page, where a user can login  to the application using their accounts email and password combination.

//These are our imports which are methods taken from libraries and frameworks in order to construct the app.

import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from "@mui/material";
import { Button } from "@mui/material";

//Our entire login form is contained in a const, this means it can be referanced later.
const LoginForm = (props) => {
  //these are basic functions that will be called later througout the app. createTheme is for styling, useNavigate is for navigating between pages, and useState allows us to push default values into the form.
  const theme = createTheme();
  let navigate = useNavigate();
  const [form, setForm] = useState({email: "gary@gmail.com", password: "secret"});

//This is the code used to handle form inputs
  const handleForm = e => {

    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
//This is our submit form function which is called once the submit button is pressed. This is where the majority of this pages functionality lies.
  const submitForm = () => {
    console.log(form)
//This is the axios request that allows the app to connect to the backend api. This is a post request so it pushes data to the server and sends it back comparing the email and password, responding  with an authenticated prop, before navigating back to the home page.
    axios.post('http://localhost:9000/users/login', {
        email: form.email,
        password: form.password,
      })

      .then(response => {
        console.log(response.data.token)
        props.onAuthenticated(true, response.data.token)
        navigate('/home')
      })
      .catch(err => console.log(err))
  }

//The return is similar to render, where the visual elements of the page are loaded.
  return (
    //We provide a theme and then fit everything into a grid component, with grid items fitting into the layout.
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* grid item for the background image */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.alphacoders.com/101/thumb-1920-1018241.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
{/* grid item for the background of the form */}
        <Grid item xs={12} sm={8} md={5} component={Card} backgroundColor={"white"} boxShadow={22} levation={20} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Avatar Icon for the form */}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
            </Avatar>
            {/* Typography box */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* Textfield for user email */}
              <TextField
                margin="normal"
                required
                fullwidth="true"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleForm}
              />
               {/* Textfield for user password */}
              <TextField
                margin="normal"
                required
                fullwidth="true"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleForm}
              />
              {/* Buttton that uses the submit form function above to carry out the server request */}
              <Button 
                onClick={submitForm}
                fullwidth="true"
                variant="outlined"
                bgcolor="#800080"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
        {/* Link to register page */}
                <Grid item>
                  <Link href="http://localhost:3000/register" variant="body2">
                    {"Don't have an account? Register Now!"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );

  // return (
  //   <>
  //     <TextField label="Email" variant="outlined" name="email" onChange={handleForm} /> <br/>
  //     Passwor: <input type="password" name="password" onChange={handleForm} />

  //     <button style={btnStyles} onClick={submitForm}>Submit</button>
  //   </>
  // );
};

export default LoginForm;
