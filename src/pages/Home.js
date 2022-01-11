//This is the home page, the first page you are greeted with. it has a simple message and image to welcome you to the site.

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
const Home = props => {
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
              Welcome to Miniature Market!
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
              Your one stop shop for your modeling, painting and hobby needs.
            </Typography>
            <CardMedia
            boxShadow={22}
              sx={{
                my: 2,
                pl:20,
                pr:20
                
              }}
              component="img"
              image='https://www.warhammer-community.com/wp-content/uploads/2019/07/ApocDisplay-Jul05-ImagesFull5yujs.jpg'
              >
            </CardMedia>
            <Typography>

            </Typography>

            
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home