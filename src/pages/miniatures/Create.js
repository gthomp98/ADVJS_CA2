//This is the create.js page where a new miniature is created and sent to the database.

//These are our imports
import {useState} from 'react'
import axios from 'axios'
import {TextField, MenuItem, FormControl, Select, InputLabel, Button, Checkbox} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import { Grid } from '@material-ui/core'
import { Card, CardMedia } from '@material-ui/core'
import { Box } from '@material-ui/core'


//This is the create const which contains the entire page.
const Create = () => {

    let navigate = useNavigate()

    const [form, setForm] = useState({})

    const handleForm = e => {
        
        setForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))

    }

    //This is the submit form function which will require a token to access
    //It uses an axios interceptor to monitor between the response and the catch. 
    //It is a post request, which will create a new miniature with a name, faction, price, inPrint, inStock variables and a new id.
    //Once submitted it will navigate the user back to the miniature id page showing the miniature they just created.
    const submitForm = () => {
        console.log(form)

        let token = localStorage.getItem('token')
        console.log(1)

        axios.interceptors.request.use(config => {
            console.log("Request sent")
            console.log(config)
            return config
        }, error => {
            console.log(error)
            return Promise.reject(error)
        })


        axios.post('http://localhost:9000/miniatures/create', {
            name: form.name,
            faction: form.faction,
            inPrint: form.inPrint,
            price: form.price,
            inStock: form.inStock,
            miniatureId: form._id
                
            
        }, {
            headers: {
                "Authorization": `${token}`
            }
        })
            .then(response => {
                console.log(2)
                console.log(response.data)
                navigate(`/miniatures/${response.data._id}`)
            })
            .catch(err => {
                console.log(3)
                console.log(err)
                console.log(err.response)
            })
    }
//This is the return which displays the background image, then uses breakpoints to add a "margin" to the form within the card component.
//It uses text fields for each miniature data type before submitting the form using a button that links to the submitForm function
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
              Create a new Miniature
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
//This is then exported
export default Create