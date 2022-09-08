import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

const Planets = (props) => {
    const [planets, setPlanets] = useState('');

    const {id} = useParams()

    // USE EFFECT IMMEDIATELY EXECUTES LOGIC
    // WHEN A COMPONENT IS FIRST RENDERED
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanets(response.data)) // SUCESSFUL RESPONSE
            .catch(error => console.log(error)) // UNSECUESSFUL RESPONSE
    },[id])


    return (
        <div>
            <h1>Planet {id}</h1>
            {
                planets && 
                <div>
                    <h2>Name:{planets.name}</h2>
                    <h3>Climate:{planets.climate}</h3>
                    <h3>Terrain:{planets.terrain}</h3>
                    <h3>Surface Water:{planets.surface_water}</h3>
                    <h3>Population:{planets.population}</h3>
                </div>
            }
        </div>
    )
}

export default Planets
