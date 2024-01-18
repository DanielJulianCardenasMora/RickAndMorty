import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './action-types'









export const addFav = (payload) => {
    return {
        type: ADD_FAV,
        payload
    }
} 

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type:ORDER,
        payload: orden
    }
}