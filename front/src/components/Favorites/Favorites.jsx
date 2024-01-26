import React from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import style from './Favorites.module.css'




function Favorites() {
    const state = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()
    const handleOrder = (evento)=> {
        dispatch(orderCards(evento.target.value))
    }
    const handleFilter = (evento)=> {
        dispatch(filterCards(evento.target.value))
    }

    return (
        <div>
            <div>
                <select className={style.sence} name='order'defaultValue='orderCharacter' onChange={handleOrder}>
                    <option value='orderCharacter' disabled='disabled'>Order...</option>
                    <option value='A'>Ascendente</option>
                    <option value='D'>Descendente</option>
                </select>
                <select className={style.options} name='filter' defaultValue='All' onChange={handleFilter}>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            {
                state.map(character => (
                    <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        species={character.species}
                        image={character.image}
                        gender={character.gender}
                    />
                ))
            }
        </div>
    )
}

export default Favorites