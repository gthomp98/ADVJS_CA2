import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

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
      return (
          <div key={miniature._id}>
              <p>
                <b>Name: </b> {" "}
                <Link to={`/miniatures/${miniature._id}`}>{miniature.name}</Link>{" "}
                </p>
                <p>
                <b>Faction: </b> {miniature.faction}{" "}
                </p>
              <hr />
          </div>
          
      )
  })

  return (
    <div>
      <h2>Miniatures</h2>
      <p>This is the Miniatures Index page</p>
      <Link to="create">Create</Link>
    {miniaturesList}
    </div>
  )
}

export default Miniatures
