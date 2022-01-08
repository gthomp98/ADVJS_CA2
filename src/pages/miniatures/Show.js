import { useParams } from 'react-router-dom'
import axios from '../../config'
import { useEffect, useState } from 'react'
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

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
        <h2>This is the miniatures show page: {id}</h2>

        <p><b>Name: </b> {miniature.name} </p>
        <p><b>Faction: </b> {miniature.faction} </p>
        <p><b>InPrint:</b> {miniature.inPrint}</p>
        <p><b>Price: </b> {miniature.price} </p>
        <p><b>InStock:</b> {miniature.inStock}</p>
        <Link to="edit" >Edit</Link>
        <Link to="delete" >Delete</Link>
      </div>
    )
  }
  
  export default Show