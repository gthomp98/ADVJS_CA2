import { useParams } from 'react-router-dom'
import axios from '../../config'
import { useEffect, useState } from 'react'
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom'


import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Card, CardMedia } from '@material-ui/core';


const Show = () => {
    let { id } = useParams()
    const [miniature, setMiniature] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:9000/miniatures/${id}`, {
            headers: {
                "Authorization": `${token}`
            }
        })
             .then(response => {
                console.log(response.data)
                setMiniature(response.data)
             })
             .catch(err => {
                console.log(`Error: ${err}`)
             })
    }, [id, token])

    if(!miniature) return null

    return (
      <div>
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
    
      <div>
        
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <CardMedia alt="complex" image="https://i.pinimg.com/originals/2b/d6/bc/2bd6bc81147740daac0319562c47008f.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
              <Typography gutterBottom variant="name" component="div">
                <p>
               {miniature.name}
                </p>
              </Typography>
              <Typography variant="faction" gutterBottom>
              <b>Faction: </b> {miniature.faction}{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <b>ID: </b> {miniature._id}{" "}
              </Typography>
            </Grid>
        <Grid item>
            <Typography variant="subtitle1" component="div">
            <b>Price: </b> {miniature.price}{" "}
            </Typography>
          </Grid>
          
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  
        <Link to="edit" >Edit</Link>
        <Link to="delete" >Delete</Link>
      </div>
      </Grid>
      </div>
    )
  }
  
  export default Show