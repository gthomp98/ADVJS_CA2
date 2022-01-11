//This is the about page, a simple page that is primarilly designed just to have a card with some text in it showing off a little bit of detail about the store.

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
const About = props => {
  const theme = createTheme();
  return (

    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

        <Grid 
        item 
        xs={12} 
        sm={8} 
        md={12} 
        component={Card} 
        sx={{
          backgroundImage: 'url(https://images7.alphacoders.com/868/868312.jpg)'
        }}
       boxShadow={22} 
       levation={20} 
       square>
          <Box
            sx={{
              backgroundColor: "white",
              my: 20,
              mx: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5"   sx={{ mt: 3, mb: 2 }}>
              About Us
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
            We at Miniature Market are dedicated to being a central gaming hub for the community. We offer a family friendly environment for people of all ages to come down and enjoy their favourite games or even learn new ones, while also supplying avid gamers with all the supplies they need to get models on the table!
            </Typography>
  
   

            
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default About