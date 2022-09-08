import  { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

const People = (props) => {
    const[people, setPeople] = useState();
    
    const {id} = useParams()

    // USE EFFECT IMMEDIATELY EXECUTES LOGIC
    // WHEN A COMPONENT IS FIRST RENDERED
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setPeople(response.data)) // SUCESSFUL RESPONSE
            .catch(error => console.log(error)) // UNSECUESSFUL RESPONSE
    },[id])


    return (
        <div>
            <h1>Person id {id}</h1>

            {/* HOT WIRE */}
            {
                people && 
                <div>
                    <h2>NAME:{people.name}</h2>
                    <h3>Hair color:{people.hair_color}</h3>
                    <h3>Mass:{people.height}</h3>
                    <h3>Age:{people.mass}</h3>
                    <h3>Skin color:{people.skin_color}</h3>
                </div>
            }
        </div>
    )
}

export default People
