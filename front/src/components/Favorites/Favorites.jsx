import React from 'react'
import Card from '../Card/Card'
import { useSelector } from "react-redux";

function Favorites() {
    const state = useSelector((state) => state.myFavorites)


    return (
        <div>
            {
                state.map(character => (
                    <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        species={character.species}
                        image={character.image}
                    />
                ))
            }
        </div>
    )
}

export default Favorites