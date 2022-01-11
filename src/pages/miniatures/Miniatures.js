import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Card, CardMedia } from '@material-ui/core';
import { grid } from '@mui/system';


const Miniatures = () => {
  const [miniatures, setMiniatures] = useState(null)

  useEffect(() => {
      axios
      .get("http://localhost:9000/miniatures/")
           .then(response => {
               console.log(response.data)
               setMiniatures(response.data)
           })
           .catch(err => {
               console.log(`Error: ${err}`)
           })
       }, [])

  if(!miniatures) return null;

  const miniaturesList = miniatures.map(miniature => {
      // return (
      //     <div key={miniature._id}>
      //         <p>
      //           <b>Name: </b> {" "}
      //           <Link to={`/miniatures/${miniature._id}`}>{miniature.name}</Link>{" "}
      //           </p>
      //           <p>
      //           <b>Faction: </b> {miniature.faction}{" "}
      //           </p>
      //         <hr />
      //     </div>
          
      // )
    return(
      
      <div key={miniature._id}>
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
                <Link to={`/miniatures/${miniature._id}`}>{miniature.name}</Link>{" "}
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
          
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            <b>Price: </b> {miniature.price}{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    
    </div>
    )
  })

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
         <Typography component="h1" variant="h2" align='center' backgroundColor="white">
           Miniature Catalogue
         </Typography>
    

    
      <Link to="create">Create</Link>
    {miniaturesList}

             

    </Grid>
    </div>
  )
}

export default Miniatures
