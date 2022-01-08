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
const LoginForm = (props) => {
  const theme = createTheme();
  let navigate = useNavigate();
  const [form, setForm] = useState({email: "gary@gmail.com", password: "secret"});

  const handleForm = e => {

    

    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const submitForm = () => {
    console.log(form)

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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
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
                Sign In
              </Button>
              <Grid container>
        
                <Grid item>
                  <Link href="http://localhost:3000/register" variant="body2">
                    {"Don't have an account? Sign Up"}
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
