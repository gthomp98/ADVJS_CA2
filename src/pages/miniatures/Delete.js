//This is the delete page, which is called when a delete link in the miniature show page is clicked.

//This is the imports we use
import { useParams } from 'react-router-dom'
import axios from '../../config'
import { useEffect, useState } from 'react'
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

//This is the delete const everything is contained within
const Delete = () => {
    //This gets the id of the miniature to make sure we are deleting the correct one
    let { id } = useParams()
    const [miniature, setMiniature] = useState(null)
//you must be authenticated to use this function
    let token = localStorage.getItem('token')
//This is the axios request that goes to the server, inputting the id after the request so that the correct miniature is removed from the server, before responding with "Miniature deleted"
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