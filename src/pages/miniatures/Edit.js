//This is the edit miniature page, where an exisiting miniature can have certain values changed while keeping others the same

//These are our imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button, Checkbox } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import { Grid } from '@material-ui/core'
import { Card, CardMedia } from '@material-ui/core'
import { Box } from '@material-ui/core'

//This is the edit const which contains the whole page
const Edit = () => {

    //id and navigate are insttansiated and the from and miniature are given states to be updated
    let navigate = useNavigate()
    let { id } = useParams()
  
    const [form, setForm] = useState({})
    const [miniature, setMiniature] = useState(null)
//You mustt be authenticated to use this function
    let token = localStorage.getItem('token')
    console.log()
//There are two requests in this page, the first is a get, this gets the miniature by id to ensure that the input data reflects the miniatures data which responds and sets the form
    useEffect(() => {
        axios.get(`http://localhost:9000/miniatures/${id}`, {
            headers: {
                "Authorization": `${token}`
            }
        })
        .then(response => {
            console.log(response.data)
            setMiniature(response.data)
            setForm(response.data)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    }, [id, token])
//If no miniature is present with that id return nothing
    if(!miniature) return null
//Code for handling the forms state
    const handleForm = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
//Submit form function while outputting the contents to the console
    const submitForm = () => {
        console.log(form)

        let token = localStorage.getItem('token')
//This is the second request which uses a patch request in order to change the data in the specific field rather than the entire document in the database
//It has every field necessary for a miniature but tthe instock and inprint fields are not representd in the form
        axios.patch(`http://localhost:9000/miniatures/${id}`, {
            name: form.name,
            faction: form.faction,
            inPrint: form.inPrint,
            price: form.price,
            inStock: form.inStock
    },{

            headers: {
                "Authorization": `${token}`
            }
        })
        .then(response => {
            console.log(response.data)
            navigate(`/miniatures/${response.data._id}`)
        })
        .catch(err => console.log(err))
    }
//This is tthe return, it is exactly the same as the create form
    return (
 
        <Box
  sx={{
    backgroundImage: 'url(https://images7.alphacoders.com/868/868312.jpg)',
     height:2000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    
<Card align="center"  >   
<Typography component="h1" variant="h5">
    Edit an existing miniature
  </Typography>
    <TextField
      margin="normal"
      required
      fullwidth="true"
      id="name"
      label="Name"
      name="name"
      autoComplete="name"
      autoFocus
      onChange={handleForm}
    />
    <br>
    </br>
    <TextField
      margin="normal"
      required
      fullwidth="true"
      name="faction"
      label="Faction"
      type="faction"
      id="faction"
      autoComplete="faction"
      onChange={handleForm}
    />
     <br>
     </br>
     <TextField
      margin="normal"
      required
      fullwidth="true"
      name="price"
      label="Price"
      type="price"
      id="price"
      autoComplete="price"
      onChange={handleForm}
    />
    <br>
    </br>

    <Button 
      onClick={submitForm}
      fullwidth="true"
      variant="outlined"
      bgcolor="#800080"
      sx={{ mt: 3, mb: 2 }}
    >
     Submit
    </Button>
    </Card>
   </Box>
   
)
}

    export default Edit
