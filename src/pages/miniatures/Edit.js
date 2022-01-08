import { useState, useEffect } from 'react'
import axios from 'axios'
import { TextField, MenuItem, FormControl, Select, InputLabel, Button, Checkbox } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    let navigate = useNavigate()
    let { id } = useParams()
  
    const [form, setForm] = useState({})
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
            setForm(response.data)
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    }, [id, token])

    if(!miniature) return null

    const handleForm = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const submitForm = () => {
        console.log(form)

        let token = localStorage.getItem('token')

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

    return (
        <div>
            <h2>Edit</h2>

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
    )}

    export default Edit
