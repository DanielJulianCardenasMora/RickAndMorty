import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'





function Detail() {
    const [character, setCharacter] = useState({})  
    // const URL_BASE = 'https://rym2.up.railway.app/api/character/'
    // const API_KEY = 'henrystaff'
    // const URL_BASE = 'https://rickandmortyapi.com/api/character/'
    const URL = "https://rickandmortyback-production-e81f.up.railway.app/rickandmorty/character/"
    const { id } = useParams()
    
    useEffect(() => {

        axios.get(`${URL}${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});

    }, [id]);
    



    return (
        <div>
            <h1>{ character?.id }</h1>
            <h2>Name:{ character.name }</h2>
            <h2>Status:{ character.status }</h2>
            <h2>Specie:{ character.species }</h2>
            <h2>Gender:{ character.gender }</h2>
            <h2>Origin:{ character.origin?.name }</h2>
            <img src={character.image} alt={'image'}/>
      </div>
    )


}

export default Detail