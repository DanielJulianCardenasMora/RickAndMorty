import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './action-types'
import axios from 'axios'
const ENDPOINT = 'https://rickandmortyback-production-e81f.up.railway.app/rickandmorty/fav';







export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(ENDPOINT, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};


export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${ENDPOINT}/${id}`)
      return dispatch({
        type: "REMOVE_FAV",
        payload: data
      });
    } catch (error) {
      alert(error.message);
      return dispatch({
        type: "ERROR",
        payload: error.message
      });
    }
  };
};


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