import { useParams } from 'react-router-dom'
import axios from '../../config'
import { useEffect, useState } from 'react'
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Delete = () => {
    let { id } = useParams()
    const [miniature, setMiniature] = useState(null)

    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.delete(`http://localhost:9000/miniatures/${id}`, {
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
    },[id, token])

    if(!miniature) return null
    return(
        <div>
            <p>Miniature Deleted</p>
        </div>
    )
}

export default Delete