//This is the register form, which mirrors the login form bar a couple of differences.

//Here is our imports
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

//This is the registration function which contains everything in the page.
const RegistrationForm = () => {
    const theme =createTheme();

    let navigate = useNavigate();
    
  const [form, setForm] = useState({});

  const handleForm = e => {

    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
//This is the submit form function but it is slightly different to the login form function. 
//It is also a post, however it doesnt respond with any authentication, and the post works differently as it is simply inputting new data into a new user object.
  const submitForm = () => {
    console.log(form)

    axios.post('http://localhost:9000/users/register', {
      //it also has a username field which the login does not
        username: form.username,
        email: form.email,
        password: form.password,
      })

      .then(response => {
        console.log(response.data)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }
//Everything in this return is identical to the login form code besides the username textfield
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <TextField
                margin="normal"
                required
                fullwidth="true"
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleForm}
              />
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
                    <Button 
                onClick={submitForm}
                fullwidth="true"
                variant="outlined"
                bgcolor="#800080"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default RegistrationForm;