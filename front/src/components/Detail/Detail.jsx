import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'





function Detail() {
    const [character, setCharacter] = useState({})  
    const URL_BASE = 'https://rym2.up.railway.app/api/character/'
    const API_KEY = 'henrystaff'
    const {id} = useParams()
    
    useEffect(() => {

        axios.get(`${URL_BASE}${id}?key=${API_KEY}`)
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
            <h1>{ character.id }</h1>
            <h2>Name:{ character?.name }</h2>
            <h2>Status:{ character?.name }</h2>
            <h2>Specie:{ character?.name }</h2>
            <h2>Gender:{ character?.name }</h2>
            <h2>Origin:{ character?.origin?.name }</h2>
            <img src={character.image} alt={'image'}/>
          Detail
      </div>
    )


}

export default Detail