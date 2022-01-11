import {useState} from 'react'
import axios from 'axios'
import {TextField, MenuItem, FormControl, Select, InputLabel, Button, Checkbox} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import { Grid } from '@material-ui/core'
import { Card, CardMedia } from '@material-ui/core'
import { Box } from '@material-ui/core'

const Create = () => {

    let navigate = useNavigate()

    const [form, setForm] = useState({})

    const handleForm = e => {
        
        setForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))

    }

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

export default Create