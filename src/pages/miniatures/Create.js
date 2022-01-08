import {useState} from 'react'
import axios from 'axios'
import {TextField, MenuItem, FormControl, Select, InputLabel, Button, Checkbox} from '@mui/material'
import { useNavigate } from 'react-router-dom'

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
        <div>
            <h2>Create</h2>

            <div className="form-group">
            <TextField variant="filled" label="Name" name="name" onChange={handleForm} />
            </div>

            <div className="form-group">
                <TextField variant="filled" label="Faction" name="faction" onChange={handleForm} />
            </div>

            <div className="form-check">
            <label className="form-check-label" name="inPrint">In Print</label>
            <Checkbox className="form-check-input" name="inPrint" checked= {true} onChange={handleForm} required/>
            </div>

            <div className="form-group">
                <TextField input-type="number" variant="filled" label="Price" name="price" onChange={handleForm} />
            </div>

            <div className="form-check">
            <label className="form-check-label" name="inStock">In Stock</label>
            <Checkbox className="form-check-input"  name="inStock" checked= {true} onChange={handleForm} required/>
            </div>
        
   
<Button onClick={submitForm} variant="contained">Submit</Button>

            </div>      
    )
}

export default Create