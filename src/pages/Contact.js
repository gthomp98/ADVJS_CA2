import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia } from "@mui/material";
import { Button } from "@mui/material";
const Contact = props => {
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
              opacity:0.7,
              my: 20,
              mx: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5"   sx={{ mt: 3, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
            Contact us at any of the links below to get in touch with any queries you may have.
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
            Email: Miniature.market@outlook.com
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
            FB: Miniature Market
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
            IG: Miniature-Market
            </Typography>
            <Typography component="h2" variant="h6"   sx={{ mt: 3, mb: 2 }}>
            Store Phone: 01-234-6543
            </Typography>
        
  
   

            
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Contact